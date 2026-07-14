"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_MODELS = exports.STORAGE_TYPES = exports.SAFE_READONLY_TOOLS = exports.SAFE_TOOLS_MODES = exports.SETTING_KEYS = exports.SAFE_DISALLOWED_TOOLS = exports.KEY_MODES = exports.ROLES = exports.AUDIT_ACTIONS = exports.CHAT_STATUS = exports.ALLOWED_UPLOAD_EXTENSIONS = exports.ALLOWED_UPLOAD_MIME_TYPES = exports.MAX_DOCUMENTS_PER_CHAT = exports.MAX_DOCUMENT_CONTEXT_CHARS = exports.MAX_TOTAL_PROMPT_CHARS = exports.MAX_MESSAGE_CHARS = exports.MAX_MESSAGES = exports.API_KEY_PREFIX = void 0;
exports.API_KEY_PREFIX = 'gk_live_';
exports.MAX_MESSAGES = 100;
exports.MAX_MESSAGE_CHARS = 100_000;
exports.MAX_TOTAL_PROMPT_CHARS = 500_000;
exports.MAX_DOCUMENT_CONTEXT_CHARS = 200_000;
exports.MAX_DOCUMENTS_PER_CHAT = 10;
exports.ALLOWED_UPLOAD_MIME_TYPES = new Set([
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
exports.ALLOWED_UPLOAD_EXTENSIONS = new Set([
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
exports.CHAT_STATUS = {
    PENDING: 'pending',
    SUCCESS: 'success',
    ERROR: 'error',
    TIMEOUT: 'timeout',
};
exports.AUDIT_ACTIONS = {
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
};
exports.ROLES = {
    CLIENT: 'client',
    ADMIN: 'admin',
};
exports.KEY_MODES = {
    SAFE: 'safe',
    AGENT: 'agent',
};
/** Tools stripped in safe mode (Grok CLI names may vary; denylist is best-effort). */
exports.SAFE_DISALLOWED_TOOLS = [
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
exports.SETTING_KEYS = {
    GLOBAL_SAFE_MODE: 'global_safe_mode',
    SAFE_MAX_TURNS: 'safe_max_turns',
    SAFE_TIMEOUT_MS: 'safe_timeout_ms',
    SAFE_TOOLS_MODE: 'safe_tools_mode', // none | readonly
    DEFAULT_MODEL: 'default_model',
    ADMIN_PANEL_ENABLED: 'admin_panel_enabled',
};
exports.SAFE_TOOLS_MODES = {
    NONE: 'none',
    READONLY: 'readonly',
};
exports.SAFE_READONLY_TOOLS = 'read_file,grep,list_dir';
exports.STORAGE_TYPES = {
    DB: 'db',
    FILESYSTEM: 'filesystem',
};
/** Fallback models if `grok models` cannot be parsed */
exports.DEFAULT_MODELS = ['grok-4.5', 'grok-composer-2.5-fast', 'grok-build'];
//# sourceMappingURL=constants.js.map