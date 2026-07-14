export declare const API_KEY_PREFIX = "gk_live_";
export declare const MAX_MESSAGES = 100;
export declare const MAX_MESSAGE_CHARS = 100000;
export declare const MAX_TOTAL_PROMPT_CHARS = 500000;
export declare const MAX_DOCUMENT_CONTEXT_CHARS = 200000;
export declare const MAX_DOCUMENTS_PER_CHAT = 10;
export declare const ALLOWED_UPLOAD_MIME_TYPES: Set<string>;
export declare const ALLOWED_UPLOAD_EXTENSIONS: Set<string>;
export declare const CHAT_STATUS: {
    readonly PENDING: "pending";
    readonly SUCCESS: "success";
    readonly ERROR: "error";
    readonly TIMEOUT: "timeout";
};
export declare const AUDIT_ACTIONS: {
    readonly CHAT_CREATE: "chat.create";
    readonly DOCUMENT_UPLOAD: "document.upload";
    readonly DOCUMENT_DELETE: "document.delete";
    readonly DOCUMENT_LIST: "document.list";
    readonly DOCUMENT_READ: "document.read";
    readonly API_KEY_CREATE: "api_key.create";
    readonly API_KEY_UPDATE: "api_key.update";
    readonly API_KEY_DELETE: "api_key.delete";
    readonly API_KEY_LIST: "api_key.list";
    readonly SETTINGS_UPDATE: "settings.update";
    readonly CHAT_ADMIN_VIEW: "chat.admin_view";
    readonly SYSTEM_UPDATE: "system.update";
    readonly SYSTEM_UPDATE_CHECK: "system.update_check";
};
export declare const ROLES: {
    readonly CLIENT: "client";
    readonly ADMIN: "admin";
};
export declare const KEY_MODES: {
    readonly SAFE: "safe";
    readonly AGENT: "agent";
};
export type KeyMode = (typeof KEY_MODES)[keyof typeof KEY_MODES];
/** Tools stripped in safe mode (Grok CLI names may vary; denylist is best-effort). */
export declare const SAFE_DISALLOWED_TOOLS: string;
export declare const SETTING_KEYS: {
    readonly GLOBAL_SAFE_MODE: "global_safe_mode";
    readonly SAFE_MAX_TURNS: "safe_max_turns";
    readonly SAFE_TIMEOUT_MS: "safe_timeout_ms";
    readonly SAFE_TOOLS_MODE: "safe_tools_mode";
    readonly DEFAULT_MODEL: "default_model";
    readonly ADMIN_PANEL_ENABLED: "admin_panel_enabled";
};
export declare const SAFE_TOOLS_MODES: {
    readonly NONE: "none";
    readonly READONLY: "readonly";
};
export declare const SAFE_READONLY_TOOLS = "read_file,grep,list_dir";
export declare const STORAGE_TYPES: {
    readonly DB: "db";
    readonly FILESYSTEM: "filesystem";
};
/** Fallback models if `grok models` cannot be parsed */
export declare const DEFAULT_MODELS: readonly ["grok-4.5", "grok-composer-2.5-fast", "grok-build"];
//# sourceMappingURL=constants.d.ts.map