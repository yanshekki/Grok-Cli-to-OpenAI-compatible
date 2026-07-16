/** Options passed to Grok CLI headless invocation. */
export interface GrokRunOptions {
  prompt: string;
  model: string;
  cwd: string;
  stream: boolean;
  sessionId?: string;
  timeoutMs?: number;
  alwaysApprove?: boolean;
  maxTurns?: number | null;
  toolsAllowlist?: string | null;
  toolsDenylist?: string | null;

  /** --json-schema */
  jsonSchema?: string | null;
  /** --prompt-json (multimodal content blocks) — when set, used instead of -p */
  promptJson?: string | null;
  /** --reasoning-effort / --effort */
  reasoningEffort?: string | null;
  /** --system-prompt-override */
  systemPromptOverride?: string | null;
  /** --rules */
  rules?: string | null;
  /** --permission-mode */
  permissionMode?: string | null;
  /** --sandbox */
  sandbox?: string | null;
  /** --allow (repeatable rules joined) */
  allowRules?: string[] | null;
  /** --deny */
  denyRules?: string[] | null;
  /** --disable-web-search */
  disableWebSearch?: boolean;
  /** --no-subagents */
  noSubagents?: boolean;
  /** --no-plan */
  noPlan?: boolean;
  /** --no-memory */
  noMemory?: boolean;
  /** --experimental-memory */
  experimentalMemory?: boolean;
  /** --best-of-n */
  bestOfN?: number | null;
  /** --check */
  check?: boolean;
  /** --verbatim */
  verbatim?: boolean;
  /** --agent */
  agent?: string | null;
  /** --agents JSON */
  agentsJson?: string | null;
  /** --resume session id */
  resumeSessionId?: string | null;
  /** --continue */
  continueSession?: boolean;
  /** --fork-session */
  forkSession?: boolean;
}
