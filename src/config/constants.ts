export const API_KEY_PREFIX = 'gk_live_';

export const MAX_MESSAGES = 100;
export const MAX_MESSAGE_CHARS = 100_000;
export const MAX_TOTAL_PROMPT_CHARS = 500_000;
export const MAX_DOCUMENT_CONTEXT_CHARS = 200_000;
export const MAX_DOCUMENTS_PER_CHAT = 10;

export const ALLOWED_UPLOAD_MIME_TYPES = new Set([
  'text/plain',
  'text/markdown',
  'text/csv',
  'text/html',
  'application/json',
  'application/xml',
  'text/xml',
  'application/pdf',
  'application/javascript',
  'application/typescript',
  'text/x-python',
  'text/x-java-source',
  'application/octet-stream',
  'image/png',
  'image/jpeg',
  'image/webp',
  'image/gif',
]);

export const ALLOWED_UPLOAD_EXTENSIONS = new Set([
  '.txt',
  '.md',
  '.markdown',
  '.csv',
  '.json',
  '.xml',
  '.html',
  '.htm',
  '.js',
  '.ts',
  '.tsx',
  '.jsx',
  '.py',
  '.java',
  '.go',
  '.rs',
  '.c',
  '.cpp',
  '.h',
  '.hpp',
  '.css',
  '.yml',
  '.yaml',
  '.toml',
  '.ini',
  '.env',
  '.sh',
  '.sql',
  '.log',
  '.pdf',
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.gif',
]);

export function isImageMime(mime: string): boolean {
  return mime.toLowerCase().startsWith('image/');
}

export const CHAT_STATUS = {
  PENDING: 'pending',
  SUCCESS: 'success',
  ERROR: 'error',
  TIMEOUT: 'timeout',
} as const;

export const AUDIT_ACTIONS = {
  CHAT_CREATE: 'chat.create',
  DOCUMENT_UPLOAD: 'document.upload',
  DOCUMENT_DELETE: 'document.delete',
  DOCUMENT_LIST: 'document.list',
  DOCUMENT_READ: 'document.read',
  API_KEY_CREATE: 'api_key.create',
  API_KEY_UPDATE: 'api_key.update',
  API_KEY_DELETE: 'api_key.delete',
  API_KEY_LIST: 'api_key.list',
  SETTINGS_UPDATE: 'settings.update',
  CHAT_ADMIN_VIEW: 'chat.admin_view',
  SYSTEM_UPDATE: 'system.update',
  SYSTEM_UPDATE_CHECK: 'system.update_check',
} as const;

export const ROLES = {
  CLIENT: 'client',
  ADMIN: 'admin',
} as const;

export const KEY_MODES = {
  SAFE: 'safe',
  AGENT: 'agent',
} as const;

export type KeyMode = (typeof KEY_MODES)[keyof typeof KEY_MODES];

/** Tools stripped in safe mode (Grok CLI names may vary; denylist is best-effort). */
export const SAFE_DISALLOWED_TOOLS = [
  'run_terminal_cmd',
  'run_terminal_command',
  'Bash',
  'bash',
  'search_replace',
  'Edit',
  'Write',
  'write',
  'web_search',
  'web_fetch',
  'WebSearch',
  'WebFetch',
  'Agent',
  'Task',
  'spawn_subagent',
  'image_gen',
  'image_edit',
  'image_to_video',
  'reference_to_video',
].join(',');

export const SETTING_KEYS = {
  GLOBAL_SAFE_MODE: 'global_safe_mode',
  SAFE_MAX_TURNS: 'safe_max_turns',
  SAFE_TIMEOUT_MS: 'safe_timeout_ms',
  SAFE_TOOLS_MODE: 'safe_tools_mode', // none | readonly
  DEFAULT_MODEL: 'default_model',
  ADMIN_PANEL_ENABLED: 'admin_panel_enabled',
} as const;

export const SAFE_TOOLS_MODES = {
  NONE: 'none',
  READONLY: 'readonly',
} as const;

export const SAFE_READONLY_TOOLS = 'read_file,grep,list_dir';

export const STORAGE_TYPES = {
  DB: 'db',
  FILESYSTEM: 'filesystem',
} as const;

/** Fallback models if `grok models` cannot be parsed */
export const DEFAULT_MODELS = ['grok-4.5', 'grok-composer-2.5-fast', 'grok-build'] as const;
