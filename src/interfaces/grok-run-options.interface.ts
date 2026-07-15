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
}
