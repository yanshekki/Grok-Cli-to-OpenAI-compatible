"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.grokCliService = exports.GrokCliService = void 0;
const node_readline_1 = require("node:readline");
// execa@5 is CJS-compatible (v8+ is ESM-only and breaks CommonJS dist/)
const execa_1 = __importDefault(require("execa"));
const env_1 = require("../config/env");
const exception_factory_1 = require("../exceptions/exception.factory");
const logger_1 = require("../utils/logger");
class GrokCliService {
    active = 0;
    get activeCount() {
        return this.active;
    }
    get maxConcurrent() {
        return env_1.env.GROK_MAX_CONCURRENT;
    }
    tryAcquire() {
        if (this.active >= env_1.env.GROK_MAX_CONCURRENT) {
            return false;
        }
        this.active += 1;
        return true;
    }
    release() {
        this.active = Math.max(0, this.active - 1);
    }
    buildArgs(options) {
        const args = [
            '-p',
            options.prompt,
            '-m',
            options.model,
            '--cwd',
            options.cwd,
            '--output-format',
            options.stream ? 'streaming-json' : 'json',
        ];
        const alwaysApprove = options.alwaysApprove !== undefined
            ? options.alwaysApprove
            : env_1.env.GROK_ALWAYS_APPROVE;
        if (alwaysApprove) {
            args.push('--always-approve');
        }
        if (options.sessionId) {
            args.push('-s', options.sessionId);
        }
        if (options.maxTurns != null && options.maxTurns > 0) {
            args.push('--max-turns', String(options.maxTurns));
        }
        if (options.toolsAllowlist) {
            args.push('--tools', options.toolsAllowlist);
        }
        if (options.toolsDenylist) {
            args.push('--disallowed-tools', options.toolsDenylist);
        }
        return args;
    }
    async runOnce(options) {
        const args = this.buildArgs({ ...options, stream: false });
        const timeout = options.timeoutMs ?? env_1.env.GROK_TIMEOUT_MS;
        logger_1.logger.debug({
            bin: env_1.env.GROK_BIN,
            model: options.model,
            cwd: options.cwd,
            alwaysApprove: options.alwaysApprove,
            maxTurns: options.maxTurns,
            toolsAllowlist: options.toolsAllowlist,
            toolsDenylist: options.toolsDenylist ? '[set]' : null,
        }, 'Spawning grok');
        try {
            const result = await (0, execa_1.default)(env_1.env.GROK_BIN, args, {
                timeout,
                reject: false,
                env: this.sanitizedEnv(),
                maxBuffer: 20 * 1024 * 1024,
            });
            if (result.timedOut) {
                throw exception_factory_1.ExceptionFactory.grokTimeout();
            }
            if (result.exitCode !== 0) {
                const stderr = (result.stderr || '').slice(0, 2000);
                logger_1.logger.error({ exitCode: result.exitCode, stderr }, 'Grok CLI failed');
                throw exception_factory_1.ExceptionFactory.grokError(`Grok CLI exited with code ${result.exitCode}`, { stderr });
            }
            const raw = this.parseJsonResult(result.stdout || '');
            return {
                text: raw.text ?? '',
                stopReason: raw.stopReason,
                sessionId: raw.sessionId,
                raw,
            };
        }
        catch (err) {
            if (err instanceof Error && 'code' in err && err.code === 'ENOENT') {
                throw exception_factory_1.ExceptionFactory.grokNotAvailable(`Grok binary not found: ${env_1.env.GROK_BIN}. Install Grok CLI and ensure it is on PATH.`);
            }
            throw err;
        }
    }
    async *stream(options) {
        const args = this.buildArgs({ ...options, stream: true });
        const timeout = options.timeoutMs ?? env_1.env.GROK_TIMEOUT_MS;
        const proc = (0, execa_1.default)(env_1.env.GROK_BIN, args, {
            timeout,
            reject: false,
            env: this.sanitizedEnv(),
            buffer: false,
        });
        if (!proc.stdout) {
            throw exception_factory_1.ExceptionFactory.grokError('Grok CLI produced no stdout');
        }
        const rl = (0, node_readline_1.createInterface)({ input: proc.stdout });
        try {
            for await (const line of rl) {
                const trimmed = line.trim();
                if (!trimmed)
                    continue;
                try {
                    const event = JSON.parse(trimmed);
                    yield event;
                }
                catch {
                    logger_1.logger.warn({ line: trimmed.slice(0, 200) }, 'Skipping non-JSON grok stream line');
                }
            }
            const result = await proc;
            if (result.timedOut) {
                throw exception_factory_1.ExceptionFactory.grokTimeout();
            }
            if (result.exitCode !== 0 && result.exitCode !== null) {
                const stderr = (result.stderr || '').toString().slice(0, 2000);
                throw exception_factory_1.ExceptionFactory.grokError(`Grok CLI exited with code ${result.exitCode}`, { stderr });
            }
        }
        finally {
            rl.close();
            try {
                proc.kill('SIGTERM');
            }
            catch {
                /* ignore */
            }
        }
    }
    async isAvailable() {
        try {
            const result = await (0, execa_1.default)(env_1.env.GROK_BIN, ['--version'], {
                timeout: 10_000,
                reject: false,
            });
            return result.exitCode === 0;
        }
        catch {
            return false;
        }
    }
    async listModelsFromCli() {
        try {
            const result = await (0, execa_1.default)(env_1.env.GROK_BIN, ['models'], {
                timeout: 30_000,
                reject: false,
                env: this.sanitizedEnv(),
            });
            if (result.exitCode !== 0) {
                return [];
            }
            return this.parseModelsOutput(result.stdout || '');
        }
        catch {
            return [];
        }
    }
    parseModelsOutput(stdout) {
        const models = [];
        for (const line of stdout.split('\n')) {
            const match = line.match(/^\s*[\*\-]\s+([a-zA-Z0-9._\-]+)/);
            if (match?.[1]) {
                models.push(match[1]);
            }
        }
        return [...new Set(models)];
    }
    parseJsonResult(stdout) {
        const trimmed = stdout.trim();
        if (!trimmed) {
            return { text: '' };
        }
        // Prefer last JSON object if CLI prints extra lines
        const lines = trimmed.split('\n').filter(Boolean);
        for (let i = lines.length - 1; i >= 0; i -= 1) {
            try {
                return JSON.parse(lines[i]);
            }
            catch {
                /* try previous */
            }
        }
        try {
            return JSON.parse(trimmed);
        }
        catch {
            // Fallback: treat entire stdout as plain text
            return { text: trimmed };
        }
    }
    sanitizedEnv() {
        const { DATABASE_URL: _db, ENCRYPTION_KEY: _enc, ADMIN_BOOTSTRAP_KEY: _admin, ...rest } = process.env;
        return rest;
    }
}
exports.GrokCliService = GrokCliService;
exports.grokCliService = new GrokCliService();
//# sourceMappingURL=grok-cli.service.js.map