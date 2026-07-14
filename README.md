# Grok CLI → OpenAI-Compatible Gateway

[![CI](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/actions/workflows/ci.yml/badge.svg)](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/grok-cli-to-openai-compatible.svg)](https://www.npmjs.com/package/grok-cli-to-openai-compatible)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D20-brightgreen)](https://nodejs.org/)
[![Default port](https://img.shields.io/badge/port-3847-informational)](#default-port-3847)

**Languages:** English | [中文](./README-ZH.md)

Turn local **[Grok CLI](https://x.ai)** headless mode (`grok -p`) into a production-ready **OpenAI-compatible HTTP API**, with encryption, audit logging, per-key **safe/agent** security policy, a full **Admin Panel**, and a control CLI (`gctoac` / `gcoa`).

| | |
|--|--|
| **npm package** | [`grok-cli-to-openai-compatible`](https://www.npmjs.com/package/grok-cli-to-openai-compatible) |
| **CLI** | `gctoac` · short alias `gcoa` |
| **Default port** | **`3847`** (project-specific; override with `PORT=`) |

```text
Client (OpenAI SDK / curl)
        │  Authorization: Bearer gk_live_...
        ▼
┌───────────────────────────────────────┐
│  Express Gateway :3847                │
│  · Auth / rate limit / validation     │
│  · Safe | Agent policy                │
│  · Encrypt + audit every chat         │
│  · Admin Panel @ /admin               │
│  · CLI: gctoac start|stop|status|update│
└───────────────────┬───────────────────┘
                    │ spawn
                    ▼
              grok -p …  (local CLI)
```

---

## Install (npm)

### Global (recommended)

**Option A — install script (most reliable from GitHub)**

```bash
curl -fsSL https://raw.githubusercontent.com/yanshekki/Grok-Cli-to-OpenAI-compatible/main/scripts/install.sh | bash
```

**Option B — clone + link**

```bash
git clone https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible.git
cd Grok-Cli-to-OpenAI-compatible
npm install
npm run build
npm link                 # exposes gctoac / gcoa on PATH
```

**Option C — npm registry (after `npm publish`)**

```bash
npm install -g grok-cli-to-openai-compatible
```

**Option D — local tarball**

```bash
git clone https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible.git
cd Grok-Cli-to-OpenAI-compatible && npm install && npm run build && npm pack
npm install -g ./grok-cli-to-openai-compatible-*.tgz
```

> ⚠️ **`npm install -g github:yanshekki/...` is unreliable** on some npm versions  
> (empty/partial git clones, Prisma postinstall `spawn sh` / `TAR_ENTRY_ERROR`).  
> Prefer **A / B / D**. After install you should see:

```bash
which gctoac
gctoac version
gctoac doctor
gctoac setup          # ~/.gctoac — .env, DB migrate, admin key
gctoac start          # background on port 3847
gctoac status
```

Global data directory: **`~/.gctoac/`** (override with `GCTOAC_HOME` or `gctoac --home /path`).

### Local project

```bash
npm install grok-cli-to-openai-compatible
npx gctoac setup
npx gctoac start --foreground
```

### From source

```bash
git clone https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible.git
cd Grok-Cli-to-OpenAI-compatible
npm install
npm run build
npx gctoac setup      # uses project ./data when run inside the repo
npx gctoac start
```

---

## CLI reference (`gctoac` / `gcoa`)

| Command | Description |
|---------|-------------|
| `gctoac setup` | Create data dirs, `.env`, migrate, seed admin key |
| `gctoac start` | Start gateway in background |
| `gctoac start -f` | Start in foreground |
| `gctoac stop` | Stop background process |
| `gctoac restart` | Stop + start |
| `gctoac status` | PID + `/health` check |
| `gctoac migrate` | `prisma migrate deploy` |
| `gctoac seed` | Bootstrap admin API key |
| `gctoac doctor` | Check Node, Grok CLI, env, build |
| `gctoac update` | **Self-update** (git / npm / GitHub) then restart |
| `gctoac update --check` | Only check for a newer version |
| `gctoac update --no-restart` | Update without restarting |
| `gctoac open` | Print API / Admin URLs |
| `gctoac open --admin` | Admin URL only |
| `gctoac version` | Package version |

**Global flags:**

```bash
gctoac --home ~/.gctoac-alt setup
gctoac --port 3847 start
```

---

## Default port `3847`

| URL | Purpose |
|-----|---------|
| `http://127.0.0.1:3847/v1` | OpenAI-compatible API base |
| `http://127.0.0.1:3847/admin/` | Admin Panel |
| `http://127.0.0.1:3847/health` | Liveness |

Override with `PORT=` in `.env` or `gctoac --port … start`.

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
| **CLI** | `gctoac` / `gcoa` lifecycle + **self-update** |
| **One-click update** | Admin → System → one-click update & restart |
| **Ops** | SQLite, PM2, GitHub Actions CI, structured logging |

---

## Tech stack

- **Runtime:** Node.js 20+, TypeScript (strict)
- **HTTP:** Express, Helmet, CORS, express-rate-limit, Zod
- **Data:** Prisma + **SQLite**
- **CLI:** Commander (`gctoac` / `gcoa`)
- **Process:** PM2 (fork, single instance) or `gctoac start`
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

## Quick start (source / dev)

```bash
git clone https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible.git
cd Grok-Cli-to-OpenAI-compatible

cp .env.example .env
# Generate a 32-byte key and paste into ENCRYPTION_KEY=
openssl rand -base64 32

npm install
npm run db:setup    # migrate + seed (prints admin API key ONCE)

npm run dev
# → API:   http://127.0.0.1:3847
# → Admin: http://127.0.0.1:3847/admin/
```

Or: `npm run build && gctoac setup && gctoac start`

### First admin login

1. Copy the **admin API key** printed by `gctoac setup` / `npm run seed` (shown once only).  
2. Open **http://127.0.0.1:3847/admin/**  
3. Paste the key to sign in.  
4. Create a **client** key (`mode=safe` for external apps, `mode=agent` for trusted internal use).

> **Security:** Admins can decrypt all chat prompts/responses. Never commit `.env` or share admin keys.

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
  cli/                        # gctoac / gcoa commands
  services/                   # business logic
    grok-cli.service.ts       # spawn + parse CLI
    policy.service.ts         # safe/agent resolution
    chat.service.ts           # completions + audit encrypt
    chat-admin.service.ts     # decrypt for admin
    update.service.ts         # self-update
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
| **Chats** | List + **full decrypted prompt / reasoning / content** |
| **API Keys** | Create / edit `role` + `mode` + rate limit / revoke |
| **Documents** | List, decrypt preview modal, soft-delete |
| **Audit Logs** | Lifecycle events |
| **Safety settings** | Global safe mode, tools policy, timeouts, default model |
| **System** | DB / Grok CLI / versions / **one-click update & restart** |

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
| GET | `/admin/api/system/update-check` |
| POST | `/admin/api/system/update` |

---

## Safe / Agent policy

| Mode | Default for | Behavior |
|------|-------------|----------|
| **`safe`** | New client keys | Forced sandbox cwd under `storage/sandboxes/{keyId}`, **no** `--always-approve`, tool denylist (or readonly allowlist), shorter timeout / max-turns |
| **`agent`** | Admin / trusted | Full CLI capability (optional always-approve); cwd still limited by `GROK_CWD_ALLOWLIST` |

- **Global force-safe:** `GROK_SAFE_MODE=true` **or** Admin → Safety settings → global safe mode  
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

curl -s http://127.0.0.1:3847/v1/chat/completions \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "grok-4.5",
    "messages": [{"role":"user","content":"Say hi in one word"}]
  }'
```

**Stream**

```bash
curl -sN http://127.0.0.1:3847/v1/chat/completions \
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
  baseURL: 'http://127.0.0.1:3847/v1',
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
curl -s http://127.0.0.1:3847/v1/documents \
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
| `DATABASE_URL` | SQLite path, e.g. absolute `file:/…/gateway.db` or `file:../data/gateway.db` (relative to `prisma/`) |
| `ENCRYPTION_KEY` | 32-byte key, base64 or 64-char hex (`openssl rand -base64 32`) |
| `GROK_BIN` | CLI binary (default `grok`) |
| `GROK_DEFAULT_MODEL` | Default model id |
| `GROK_DEFAULT_CWD` / `GROK_CWD_ALLOWLIST` | Working directory policy for **agent** mode |
| `GROK_ALWAYS_APPROVE` | Agent mode only; safe mode always disables this |
| `GROK_SAFE_MODE` | Force all keys into safe mode |
| `GROK_SAFE_MAX_TURNS` / `GROK_SAFE_TIMEOUT_MS` | Safe defaults |
| `GROK_MAX_CONCURRENT` | Max parallel CLI processes |
| `ADMIN_PANEL_ENABLED` | Master switch for `/admin` |
| `CORS_ORIGINS` | Comma-separated origins |
| `PORT` / `HOST` | Listen address (**default `3847`** / `0.0.0.0`) |
| `GCTOAC_HOME` | CLI data home (default `~/.gctoac` for global install) |

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
npm run build         # tsc → dist/ (+ chmod CLI)
npm start             # node dist/server.js
npm test              # Vitest (unit + integration)
npm run typecheck
npm run db:setup      # migrate deploy + seed
npm run seed          # bootstrap admin key
npm run smoke         # API_KEY=... bash scripts/smoke.sh
gctoac setup|start|status|stop|doctor|update
```

### Publish (maintainers)

```bash
npm login
npm run build
npm publish --access public
```

Install from GitHub without npm publish:

```bash
npm install -g github:yanshekki/Grok-Cli-to-OpenAI-compatible
```

---

## License

MIT — see [LICENSE](./LICENSE).

---

## Disclaimer

This project shells out to **Grok CLI**, which can run tools (filesystem, shell, web, etc.) depending on policy and flags. You are responsible for authentication, network exposure, and key mode (`safe` vs `agent`). The authors are not responsible for misuse or data loss.
