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
]);

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
  API_KEY_CREATE: 'api_key.create',
  API_KEY_DELETE: 'api_key.delete',
  API_KEY_LIST: 'api_key.list',
} as const;

export const ROLES = {
  CLIENT: 'client',
  ADMIN: 'admin',
} as const;

export const STORAGE_TYPES = {
  DB: 'db',
  FILESYSTEM: 'filesystem',
} as const;

/** Fallback models if `grok models` cannot be parsed */
export const DEFAULT_MODELS = ['grok-4.5', 'grok-composer-2.5-fast', 'grok-build'] as const;
