# Grok CLI → OpenAI-Compatible Gateway

[![CI](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/actions/workflows/ci.yml/badge.svg)](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D20-brightgreen)](https://nodejs.org/)

Turn local **[Grok CLI](https://x.ai)** headless mode (`grok -p`) into a production-ready **OpenAI-compatible HTTP API**, with encryption, audit logging, per-key **safe/agent** security policy, and a full **Admin Panel**.

Any OpenAI SDK / Open WebUI / Cursor-compatible client can point `baseURL` here and use Grok CLI as the backend.

```text
Client (OpenAI SDK / curl)
        │  Authorization: Bearer gk_live_...
        ▼
┌───────────────────────────────────────┐
│  Express Gateway (this project)       │
│  · Auth / rate limit / validation     │
│  · Safe | Agent policy                │
│  · Encrypt + audit every chat         │
│  · Admin Panel @ /admin               │
└───────────────────┬───────────────────┘
                    │ spawn
                    ▼
              grok -p …  (local CLI)
```

---

## Features

| Area | Details |
|------|---------|
| **OpenAI API** | `POST /v1/chat/completions` (stream + non-stream), `GET /v1/models` |
| **Thinking** | DeepSeek-style `reasoning_content` + Grok `thought` alias + `grok.*` metadata |
| **Documents** | Encrypted upload; attach via `document_ids` in chat |
| **Security modes** | Per-key `safe` / `agent`; optional global force-safe |
| **Encryption** | AES-256-GCM for prompts, responses, document bodies |
| **Admin UI** | Dashboard, full chat in/out decrypt, keys, docs, audit, settings |
| **Ops** | SQLite (zero DB server), PM2, GitHub Actions CI, structured logging |

---

## Tech stack

- **Runtime:** Node.js 20+, TypeScript (strict)
- **HTTP:** Express, Helmet, CORS, express-rate-limit, Zod
- **Data:** Prisma + **SQLite**
- **Process:** PM2 (fork, single instance)
- **Grok:** Local CLI via `execa` (argv only, no shell)

---

## Prerequisites

1. [Node.js](https://nodejs.org/) ≥ 20  
2. [Grok CLI](https://x.ai) installed and authenticated:

```bash
curl -fsSL https://x.ai/cli/install.sh | bash
grok login
grok --version
```

---

## Quick start

```bash
git clone https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible.git
cd Grok-Cli-to-OpenAI-compatible

cp .env.example .env
# Generate a 32-byte key and paste into ENCRYPTION_KEY=
openssl rand -base64 32

npm install
npm run db:setup    # migrate + seed (prints admin API key ONCE)

npm run dev
# → API:   http://127.0.0.1:3000
# → Admin: http://127.0.0.1:3000/admin/
```

### First admin login

1. Copy the **admin API key** printed by `npm run seed` (only shown once).  
2. Open **http://127.0.0.1:3000/admin/**  
3. Paste the key to sign in.  
4. Create a **client** key (`mode=safe` for external apps, `mode=agent` for trusted internal use).

> **Security:** Admin can decrypt all chat prompts/responses. Never commit `.env` or share admin keys.

---

## Production (PM2)

```bash
npm run build
pm2 start ecosystem.config.cjs
pm2 status
pm2 logs grok-openai-gateway
```

Uses **fork mode, 1 instance** so concurrent Grok child processes stay predictable.

---

## Project layout

```text
src/
  app.ts / server.ts          # Express app + graceful shutdown
  config/                     # env, database, cors, constants
  dto/                        # Zod request schemas
  interfaces/                 # OpenAI / Grok / auth types
  entities/                   # Domain shapes
  exceptions/                 # HTTP errors (OpenAI-ish JSON)
  middlewares/                # auth, rate-limit, validate, upload…
  controllers/                # HTTP layer (+ admin)
  routes/v1/                  # public OpenAI-compatible API
  routes/admin.routes.ts      # /admin/api/*
  services/                   # business logic
    grok-cli.service.ts       # spawn + parse CLI
    policy.service.ts         # safe/agent resolution
    chat.service.ts           # completions + audit encrypt
    chat-admin.service.ts     # decrypt for admin
    settings.service.ts       # runtime settings (DB)
    …
  utils/                      # logger, SSE, mappers, path-safe
public/admin/                 # Admin SPA (static)
prisma/                       # schema + migrations + seed
data/                         # gateway.db (gitignored)
storage/                      # encrypted files + sandboxes
tests/                        # Vitest unit + integration
```

---

## Admin Panel

| Page | Capabilities |
|------|----------------|
| **Dashboard** | Totals, 24h volume, concurrency, recent chats |
| **Chat 記錄** | List + **full decrypted prompt / reasoning / content** |
| **API Keys** | Create / edit `role` + `mode` + rate limit / revoke |
| **文件** | List, decrypt preview modal, soft-delete |
| **Audit Logs** | Lifecycle events |
| **安全設定** | Global safe mode, tools policy, timeouts, default model |
| **系統狀態** | DB / Grok CLI / env summary (no secrets) |

**Admin JSON API** (Bearer admin key):

| Method | Path |
|--------|------|
| GET | `/admin/api/me` |
| GET | `/admin/api/stats` |
| GET | `/admin/api/chats`, `/admin/api/chats/:id` |
| GET/POST/PATCH/DELETE | `/admin/api/keys`… |
| GET/DELETE | `/admin/api/documents`… |
| GET | `/admin/api/audit-logs` |
| GET/PUT | `/admin/api/settings` |
| GET | `/admin/api/system` |

---

## Safe / Agent policy

| Mode | Default for | Behavior |
|------|-------------|----------|
| **`safe`** | New client keys | Forced sandbox cwd under `storage/sandboxes/{keyId}`, **no** `--always-approve`, tool denylist (or readonly allowlist), shorter timeout / max-turns |
| **`agent`** | Admin / trusted | Full CLI capability (optional always-approve), cwd still limited by `GROK_CWD_ALLOWLIST` |

- **Global force-safe:** `GROK_SAFE_MODE=true` **or** Admin → 安全設定 →「全域 Safe Mode」  
- Clients **cannot** escalate privileges via request body (safe mode ignores arbitrary `cwd`).

> Exposing this gateway on the public internet with `agent` keys is dangerous: Grok CLI is an **agent** with tools, not a pure chat API. Prefer **`safe`** for third parties.

---

## Public API

All protected routes require:

```http
Authorization: Bearer gk_live_...
```

### Health

| Method | Path | Auth |
|--------|------|------|
| GET | `/health` | No |
| GET | `/ready` | No (DB required; reports Grok CLI) |

### OpenAI-compatible

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/models` | List models |
| GET | `/v1/models/:model` | Get model |
| POST | `/v1/chat/completions` | Chat (`stream`, thinking) |

#### Chat body (extensions)

```json
{
  "model": "grok-4.5",
  "messages": [{ "role": "user", "content": "Hello" }],
  "stream": false,
  "include_reasoning": true,
  "cwd": "/allowed/workspace",
  "session_id": "optional-grok-session",
  "document_ids": ["uuid-of-uploaded-doc"]
}
```

| Field | Notes |
|-------|--------|
| `include_reasoning` | Default `true`. Maps Grok `thought` → `reasoning_content` |
| `cwd` | Only honored in **agent** mode and inside allowlist; **safe** forces sandbox |
| `session_id` | Passed to `grok -s` for multi-turn CLI sessions |
| `document_ids` | Inject decrypted document text as system context |

#### Thinking mapping

| Grok CLI event | Mainstream (DeepSeek) | Grok extras |
|----------------|----------------------|-------------|
| `type: thought` | `reasoning_content` / `delta.reasoning_content` | `thought` / `delta.thought` |
| `type: text` | `content` / `delta.content` | same |
| `type: end` | `finish_reason` | `grok.sessionId`, `grok.stopReason` |

Stream order: **reasoning deltas → content deltas → finish (+ `grok`) → `[DONE]`**.

#### curl examples

**Non-stream**

```bash
export API_KEY=gk_live_...

curl -s http://127.0.0.1:3000/v1/chat/completions \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "grok-4.5",
    "messages": [{"role":"user","content":"Say hi in one word"}]
  }'
```

**Stream**

```bash
curl -sN http://127.0.0.1:3000/v1/chat/completions \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "grok-4.5",
    "stream": true,
    "include_reasoning": true,
    "messages": [{"role":"user","content":"Count to 3"}]
  }'
```

#### OpenAI SDK

```ts
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.API_KEY,
  baseURL: 'http://127.0.0.1:3000/v1',
});

const res = await client.chat.completions.create({
  model: 'grok-4.5',
  messages: [{ role: 'user', content: 'Hello' }],
  // @ts-expect-error gateway extension
  include_reasoning: true,
});

const msg = res.choices[0].message as {
  content?: string | null;
  reasoning_content?: string | null;
};
console.log(msg.reasoning_content, msg.content);
```

### Documents

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/documents` | multipart field `file` |
| GET | `/v1/documents` | list |
| GET | `/v1/documents/:id` | metadata |
| DELETE | `/v1/documents/:id` | soft delete |

```bash
curl -s http://127.0.0.1:3000/v1/documents \
  -H "Authorization: Bearer $API_KEY" \
  -F "file=@./notes.txt"
```

### API keys (admin role via `/v1` or Admin Panel)

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/api-keys` | Create (plaintext returned **once**) |
| GET | `/v1/api-keys` | List (prefix only) |
| DELETE | `/v1/api-keys/:id` | Revoke |

---

## Environment variables

See [`.env.example`](.env.example). Critical keys:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | SQLite path relative to `prisma/` e.g. `file:../data/gateway.db` |
| `ENCRYPTION_KEY` | 32-byte key, base64 or 64-char hex (`openssl rand -base64 32`) |
| `GROK_BIN` | CLI binary (default `grok`) |
| `GROK_DEFAULT_MODEL` | Default model id |
| `GROK_DEFAULT_CWD` / `GROK_CWD_ALLOWLIST` | Working directory policy for **agent** mode |
| `GROK_ALWAYS_APPROVE` | Agent mode only; safe mode always disables |
| `GROK_SAFE_MODE` | Force all keys into safe mode |
| `GROK_SAFE_MAX_TURNS` / `GROK_SAFE_TIMEOUT_MS` | Safe defaults |
| `GROK_MAX_CONCURRENT` | Max parallel CLI processes |
| `ADMIN_PANEL_ENABLED` | Master switch for `/admin` |
| `CORS_ORIGINS` | Comma-separated origins |
| `PORT` / `HOST` | Listen address (default `3000` / `0.0.0.0`) |

**Back up `ENCRYPTION_KEY`.** Losing it makes historical ciphertext unreadable.

---

## Security summary

| Control | Detail |
|---------|--------|
| Auth | Bearer API keys; only SHA-256 **hash** stored |
| Encryption | AES-256-GCM at rest for chat + documents |
| Safe policy | Sandbox cwd, tool limits, no always-approve |
| Rate limit | Global + per-key |
| Concurrency | Caps Grok spawns |
| Process | `execa` argv arrays only; env scrubbed |
| Path | CWD allowlist (agent); forced sandbox (safe) |
| Upload | Size / extension / MIME allowlists |
| HTTP | Helmet, CORS, body size limit |
| Audit | Encrypted chats + `audit_logs` for admin actions |

---

## Scripts

```bash
npm run dev           # tsx watch
npm run build         # tsc → dist/
npm start             # node dist/server.js
npm test              # Vitest (unit + integration)
npm run typecheck
npm run db:setup      # migrate deploy + seed
npm run seed          # bootstrap admin key
npm run smoke         # API_KEY=... bash scripts/smoke.sh
```

---

## License

MIT — see repository license terms.

---

## Disclaimer

This project shells out to **Grok CLI**, which can run tools (filesystem, shell, web, etc.) depending on policy and flags. You are responsible for authentication, network exposure, and key mode (`safe` vs `agent`). The authors are not responsible for misuse or data loss.
