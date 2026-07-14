import { type KeyMode } from '../config/constants';
import type { AuthenticatedApiKey } from '../interfaces/auth.interface';
export interface ResolvedPolicy {
    mode: KeyMode;
    alwaysApprove: boolean;
    cwd: string;
    timeoutMs: number;
    maxTurns: number | null;
    /** If set, passed as --tools allowlist */
    toolsAllowlist: string | null;
    /** If set, passed as --disallowed-tools */
    toolsDenylist: string | null;
    sandboxForced: boolean;
}
export declare class PolicyService {
    resolve(apiKey: AuthenticatedApiKey, clientCwd?: string | null): Promise<ResolvedPolicy>;
    ensureSandbox(apiKeyId: string): Promise<string>;
}
export declare const policyService: PolicyService;
//# sourceMappingURL=policy.service.d.ts.map