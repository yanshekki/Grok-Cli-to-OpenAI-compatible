# Grok CLI → OpenAI-Compatible Gateway

[![CI](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/actions/workflows/ci.yml/badge.svg)](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/grok-cli-to-openai-compatible.svg)](https://www.npmjs.com/package/grok-cli-to-openai-compatible)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D20-brightgreen)](https://nodejs.org/)
[![Port](https://img.shields.io/badge/port-3847-informational)](#default-port)

**Languages:** English · [中文](./README-ZH.md)

Production OpenAI-compatible HTTP gateway for local **[Grok CLI](https://x.ai)** (`grok -p`).

| | |
|--|--|
| **npm** | [`grok-cli-to-openai-compatible`](https://www.npmjs.com/package/grok-cli-to-openai-compatible) |
| **CLI** | `gctoac` · alias `gcoa` |
| **Default port** | **`3847`** |

**What you get**

- OpenAI-compatible `POST /v1/chat/completions` (stream + non-stream)
- Thinking / `reasoning_content` (DeepSeek-style + Grok `thought`)
- Per-key **safe** / **agent** policy
- AES-256-GCM encryption + full chat audit
- Admin Panel at `/admin` (decrypted prompt I/O, keys, one-click update)
- Control CLI: `gctoac setup | start | stop | status | update`

```text
Client (OpenAI SDK / curl / Open WebUI)
        │  Authorization: Bearer gk_live_...
        ▼
   Express Gateway :3847
   · Auth · rate limit · safe/agent
   · Encrypted audit · Admin /admin
   · gctoac start | stop | status | update
        │
        ▼
   grok -p …  (local Grok CLI)
```

---

## Quick start

### 1. Prerequisites

- **Node.js** ≥ 20  
- **Grok CLI** installed and logged in:

```bash
curl -fsSL https://x.ai/cli/install.sh | bash
grok login
grok --version
```

### 2. Install & run

```bash
npm install -g grok-cli-to-openai-compatible

gctoac doctor   # check Node / Grok / env
gctoac setup    # ~/.gctoac, .env, DB, admin API key
gctoac start    # http://127.0.0.1:3847
gctoac status
```

Open Admin (paste an **admin API key**):

```text
http://127.0.0.1:3847/admin/
```

If you lost the setup key, create a new one anytime:

```bash
gctoac key create    # prints plaintext once
gctoac key list      # prefixes only (plaintext is never stored)
```

**Data directory:** `~/.gctoac/`  
Override with `GCTOAC_HOME` or `gctoac --home /path`.

### 3. Call the API

```bash
export API_KEY=gk_live_...   # from setup or Admin

curl -s http://127.0.0.1:3847/v1/chat/completions \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "grok-4.5",
    "messages": [{"role":"user","content":"Say hi in one word"}]
  }'
```

---

## Install

**Supported path:** install from the **npm registry** only.

```bash
npm install -g grok-cli-to-openai-compatible
```

Optional helper (same as above):

```bash
curl -fsSL https://raw.githubusercontent.com/yanshekki/Grok-Cli-to-OpenAI-compatible/main/scripts/install.sh | bash
```

### Project dependency

```bash
npm install grok-cli-to-openai-compatible
npx gctoac setup
npx gctoac start --foreground
```

### Develop from source (contributors)

`dist/` is **not** committed. Build locally after clone:

```bash
git clone https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible.git
cd Grok-Cli-to-OpenAI-compatible
npm install
npm run build
npm link          # optional: put gctoac on PATH
```

> Do **not** use `npm install -g github:…` — it is unsupported.

### Update

```bash
npm install -g grok-cli-to-openai-compatible@latest
# or
gctoac update              # npm self-update + restart
gctoac update --check      # check only
gctoac update --no-restart
```

Or in Admin → **System** → one-click update.

---

## Default port

| URL | Purpose |
|-----|---------|
| `http://127.0.0.1:3847/v1` | OpenAI-compatible API base |
| `http://127.0.0.1:3847/admin/` | Admin Panel |
| `http://127.0.0.1:3847/health` | Health check |

Override with `PORT=` in `.env`, or:

```bash
gctoac --port 3847 start
```

---

## CLI (`gctoac` / `gcoa`)

| Command | Description |
|---------|-------------|
| `gctoac setup` | Create dirs, `.env`, migrate DB, seed admin key |
| `gctoac start` | Start gateway (background) |
| `gctoac start -f` | Start in foreground |
| `gctoac stop` | Stop background process |
| `gctoac restart` | Restart |
| `gctoac status` | PID + health |
| `gctoac migrate` | Run Prisma migrations |
| `gctoac seed` | Seed admin API key (if missing) |
| `gctoac key` / `gctoac key create` | **Create API key** (prints plaintext once) |
| `gctoac key list` | List keys (prefix only) |
| `gctoac key revoke <id>` | Revoke a key |
| `gctoac doctor` | Environment checks |
| `gctoac update` | Self-update then restart |
| `gctoac update --check` | Check for updates only |
| `gctoac update --no-restart` | Update without restart |
| `gctoac open` | Print API / Admin URLs |
| `gctoac version` | Show version |

```bash
gctoac --home ~/.gctoac-alt setup
gctoac --port 3847 start
```

---

## Features

| Feature | Details |
|---------|---------|
| OpenAI API | `POST /v1/chat/completions` (stream + non-stream), `GET /v1/models` |
| Thinking | `reasoning_content` + Grok `thought` + `grok.*` meta |
| Documents | Encrypted upload; attach via `document_ids` |
| Safe / Agent | Per-key policy; optional global force-safe |
| Encryption | AES-256-GCM for prompts, responses, files |
| Admin Panel | Dashboard, decrypted chat I/O, keys, docs, audit, settings, update |
| CLI | Lifecycle + self-update |
| Ops | SQLite, PM2, GitHub Actions CI |

---

## API

Protected routes require:

```http
Authorization: Bearer gk_live_...
```

### Chat (stream)

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

### OpenAI SDK

```ts
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.API_KEY,
  baseURL: 'http://127.0.0.1:3847/v1',
});

const res = await client.chat.completions.create({
  model: 'grok-4.5',
  messages: [{ role: 'user', content: 'Hello' }],
});
console.log(res.choices[0].message.content);
```

### Chat body extensions

```json
{
  "model": "grok-4.5",
  "messages": [{ "role": "user", "content": "Hello" }],
  "stream": false,
  "include_reasoning": true,
  "cwd": "/allowed/workspace",
  "session_id": "optional-session",
  "document_ids": ["uuid"]
}
```

| Field | Notes |
|-------|--------|
| `include_reasoning` | Default `true`. Maps Grok `thought` → `reasoning_content` |
| `cwd` | **agent** only (allowlist); **safe** forces sandbox |
| `session_id` | Passed to `grok -s` |
| `document_ids` | Inject decrypted documents as context |

### Thinking mapping

| Grok event | OpenAI / DeepSeek field | Extra |
|------------|-------------------------|--------|
| `thought` | `reasoning_content` / `delta.reasoning_content` | `thought` alias |
| `text` | `content` / `delta.content` | — |
| `end` | `finish_reason` | `grok.sessionId`, `grok.stopReason` |

### Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Liveness |
| GET | `/ready` | DB + Grok check |
| GET | `/v1/models` | List models |
| POST | `/v1/chat/completions` | Chat |
| POST | `/v1/documents` | Upload (`file` field) |
| GET/DELETE | `/v1/documents`… | List / soft-delete |
| POST/GET/DELETE | `/v1/api-keys`… | Admin key management |

---

## Safe / Agent policy

| Mode | Use for | Behavior |
|------|---------|----------|
| **`safe`** (default for clients) | External apps | Sandbox cwd, no always-approve, restricted tools, shorter timeout |
| **`agent`** | Trusted / internal | Full CLI tools (optional always-approve); cwd still allowlisted |

- Force all keys safe: `GROK_SAFE_MODE=true` or Admin → Safety  
- Clients **cannot** escalate via request body  
- Do **not** expose `agent` keys on the public internet  

---

## Admin Panel

```text
http://127.0.0.1:3847/admin/
```

| Page | Features |
|------|----------|
| Dashboard | Stats, recent chats, concurrency |
| Chats | Full **decrypted** prompt / reasoning / response |
| API Keys | Create, edit mode/role/rate limit, revoke |
| Documents | List, decrypt preview, delete |
| Audit Logs | Action history |
| Safety | Global safe mode, tools, timeouts |
| System | Health, versions, **one-click update & restart** |

Admin API: `/admin/api/*` (requires `role=admin`).

---

## Environment variables

See [`.env.example`](./.env.example).

| Variable | Description |
|----------|-------------|
| `PORT` | Default **`3847`** |
| `DATABASE_URL` | SQLite, e.g. `file:../data/gateway.db` (relative to `prisma/`) |
| `ENCRYPTION_KEY` | 32-byte key: `openssl rand -base64 32` |
| `GROK_BIN` | Default `grok` |
| `GROK_DEFAULT_MODEL` | Default model id |
| `GROK_DEFAULT_CWD` / `GROK_CWD_ALLOWLIST` | Agent cwd policy |
| `GROK_ALWAYS_APPROVE` | Agent only; off in safe mode |
| `GROK_SAFE_MODE` | Force all keys to safe |
| `GROK_MAX_CONCURRENT` | Max parallel Grok processes |
| `ADMIN_PANEL_ENABLED` | Toggle `/admin` |
| `CORS_ORIGINS` | Comma-separated origins |
| `GCTOAC_HOME` | CLI data home (default `~/.gctoac`) |
| `STORAGE_DIR` | Encrypted files + sandboxes |

**Back up `ENCRYPTION_KEY`.** If lost, historical data cannot be decrypted.

---

## Production (PM2)

```bash
npm run build
pm2 start ecosystem.config.cjs
pm2 logs grok-openai-gateway
```

Or simply: `gctoac start` (background; pid under data home).

---

## Project layout

```text
src/           TypeScript (app, routes, services, cli)
public/admin/  Admin SPA
prisma/        Schema, migrations, seed
dist/          Built JS (gitignored; created by npm run build / prepublishOnly)
scripts/       prepare, install.sh (npm install -g)
tests/         Vitest
```

---

## Scripts

```bash
npm run dev          # development
npm run build        # compile + prisma generate
npm start            # node dist/server.js
npm test             # unit + integration
npm run db:setup     # migrate + seed
gctoac setup|start|status|stop|doctor|update
```

### Publish (maintainers)

`prepublishOnly` runs `npm run build` so the tarball always includes `dist/`.

```bash
npm login
npm publish --access public --otp=<2FA_CODE>
```

---

## Security

- API keys stored as **SHA-256 hashes** only  
- Chat + documents encrypted at rest with **AES-256-GCM**  
- Prefer **`safe`** keys for any external client  
- Never commit `.env` or share admin keys  

---

## License

MIT — see [LICENSE](./LICENSE).

## Disclaimer

This gateway spawns **Grok CLI**, which may use filesystem, shell, and network tools depending on policy. You are responsible for exposure, authentication, and key modes. Authors are not liable for misuse or data loss.
