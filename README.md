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
| **NODE_ENV default** | **`production`** (set `development` only for local coding) |

**What you get**

- OpenAI-compatible `POST /v1/chat/completions` (stream + non-stream)
- Thinking / `reasoning_content` (DeepSeek-style + Grok `thought`)
- Per-key **safe** / **agent** policy + global safety overrides
- AES-256-GCM encryption + full chat audit
- **Admin Panel** — dashboard, chats, keys, documents, audit, usage, **DDoS center**, PM2, system update
- **DDoS / abuse protection** — configurable rate limits, multi-rule auto-ban, reverse-proxy client IP (nginx / Cloudflare)
- Control CLI: setup, start/stop/restart, status, doctor, logs, update, keys, admin on/off

```text
Client (OpenAI SDK / curl / Open WebUI)
        │  Authorization: Bearer gk_live_...
        ▼
   Express Gateway :3847
   · Auth · rate limit · safe/agent
   · Proxy-aware client IP · auto-ban
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

gctoac doctor   # Node / Grok / env / runner / proxy checks
gctoac setup    # data home, .env (NODE_ENV=production), DB, admin API key
gctoac start    # http://127.0.0.1:3847
gctoac status   # runner, port, proxy, health
```

Open Admin (paste an **admin API key**):

```text
http://127.0.0.1:3847/admin/
```

If you lost the setup key:

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

Optional helper:

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

`dist/` is **not** committed. Build after clone:

```bash
git clone https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible.git
cd Grok-Cli-to-OpenAI-compatible
npm install
npm run build
npm link          # optional: put gctoac on PATH
```

> Do **not** use `npm install -g github:…` — unsupported.

### Update

```bash
npm install -g grok-cli-to-openai-compatible@latest
# or
gctoac update              # self-update + schedule restart
gctoac update --check      # check only
gctoac update --no-restart
```

Or Admin → **System** → one-click update.

---

## Default port

| URL | Purpose |
|-----|---------|
| `http://127.0.0.1:3847/v1` | OpenAI-compatible API base |
| `http://127.0.0.1:3847/admin/` | Admin Panel |
| `http://127.0.0.1:3847/health` | Health check |

Change the listen port (persists to `.env`, restarts runner when done from Admin):

```bash
# CLI — writes PORT to .env and starts
gctoac --port 4000 start
gctoac --port 4000 start --pm2

# or edit .env
PORT=4000
```

**Admin → PM2 → Listen port** — default **3847**, save & restart. After change, open Admin on the **new** port (e.g. `http://127.0.0.1:4000/admin/`).

---

## CLI (`gctoac` / `gcoa`)

Global options: `--home <path>`, `--port <n>` (default **3847**).

| Command | Description |
|---------|-------------|
| `gctoac setup` | Create dirs, `.env`, migrate DB, seed admin key, install pm2 if possible |
| `gctoac start` | Start gateway (detached gctoac) |
| `gctoac start -f` | Foreground |
| `gctoac start --pm2` | Start under PM2 |
| `gctoac stop` | Stop gctoac + PM2 app + free port orphans |
| `gctoac restart` | Restart; respects **preferred runner** (PM2 if last used) |
| `gctoac restart --pm2` | Force restart under PM2 |
| `gctoac status` | Runner, NODE_ENV, port, trust proxy / IP source, health |
| `gctoac doctor` | Full env check (proxy, dual-runner, port conflicts, logs size) |
| `gctoac logs` / `logs show` | Tail pm2 + gctoac log files |
| `gctoac logs clear` | Truncate log files (same set as Admin clear) |
| `gctoac admin status` | Admin panel on/off |
| `gctoac admin on` / `off` | Enable/disable Admin (DB; **only CLI can turn it back on**) |
| `gctoac migrate` | Prisma migrate deploy |
| `gctoac seed` | Seed admin API key if missing |
| `gctoac key` / `key create` | Create API key (plaintext once) |
| `gctoac key list` | List keys (prefix only) |
| `gctoac key revoke <id>` | Revoke a key |
| `gctoac update` | Self-update + restart |
| `gctoac update --check` | Check only |
| `gctoac update --no-restart` | Update without restart |
| `gctoac open` | Print API / Admin URLs |
| `gctoac version` | Package version |

```bash
gctoac --home ~/.gctoac-alt setup
gctoac --port 3847 start
gctoac status
gctoac logs clear
```

---

## Features

| Feature | Details |
|---------|---------|
| OpenAI API | `POST /v1/chat/completions` (stream + non-stream), `GET /v1/models` |
| Thinking | `reasoning_content` + Grok `thought` + `grok.*` meta |
| Documents | Type-sniffed upload, encrypted storage (DB or filesystem), download |
| Safe / Agent | Per-key policy; optional global force-safe |
| Encryption | AES-256-GCM for prompts, responses, files |
| Chat history | Multi-turn conversations, context modes (full / summary / recent) |
| Admin Panel | Dashboard, chats, keys, docs, audit, usage, DDoS, PM2, system |
| DDoS center | Live connections, blacklist, auto-ban rules, presets, runtime policy |
| Reverse proxy | Trust hops + CF / nginx / X-Forwarded-For client IP |
| CLI | Lifecycle, preferred runner, logs, self-update |
| Ops | SQLite, PM2, log auto-trim (>5 MB), GitHub Actions CI |

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
| * | `/admin/api/*` | Admin JSON API (`role=admin`) |

---

## Safe / Agent policy

| Mode | Use for | Behavior |
|------|---------|----------|
| **`safe`** (default for clients) | External apps | Sandbox cwd, no always-approve, restricted tools, shorter timeout |
| **`agent`** | Trusted / internal | Full CLI tools (optional always-approve); cwd still allowlisted |

- Force all keys safe: `GROK_SAFE_MODE=true` or Admin → **Safety**  
- Clients **cannot** escalate via request body  
- Do **not** expose `agent` keys on the public internet  

---

## Admin Panel

```text
http://127.0.0.1:3847/admin/
```

| Page | Features |
|------|----------|
| **Dashboard** | 24h KPIs, success rate, protection snapshot, models, runtime (port / encryption) |
| **Chat** | Multi-turn playground, history, context modes, attachments |
| **Chat logs** | Search / filter / pager; full **decrypted** prompt / reasoning / response |
| **API Keys** | Create / edit mode / role / rate limit / IP whitelist; revoke |
| **Documents** | Search / filter / pager; preview, download, delete; storage DB vs filesystem |
| **Audit Logs** | Search / filter / pager; human-readable actions |
| **Usage & limits** | 24h stats, by-model / by-key tabs, gateway limit summary |
| **DDoS center** | Live connections, blacklist, auto-ban events, **runtime protection policy** (presets: relaxed / balanced / strict / custom), reverse-proxy IP settings |
| **Safety** | Global safe mode, tools, timeouts |
| **PM2** | Runner switch (gctoac ↔ PM2), **listen port** (default 3847), config, **clear logs** + auto-trim |
| **System** | Health, software checks, one-click update & restart |

Admin API: `/admin/api/*` (requires `role=admin`).

### DDoS / abuse (runtime)

Policy is stored in the database (Admin → DDoS). Env values are **initial defaults** only; after first save, Admin is authoritative. Reset via **Reset to env defaults**.

| Capability | Notes |
|------------|--------|
| Rate limits | Window, max per key, max per IP, chat burst |
| Auto-ban rules | Failed auth, repeated 429, concurrent flood, request velocity, escalation |
| Presets | Relaxed / Balanced / Strict / Custom (auto-detected) |
| Whitelist | Never auto-banned (e.g. `127.0.0.1`) |
| Manual ban | TTL or permanent |

### Reverse proxy / CDN (client IP)

Behind **nginx** or **Cloudflare**, configure so bans, rate limits, and audit use the **real client IP**:

| Setting | Typical value |
|---------|----------------|
| Trust proxy hops | `1` = nginx or CF→app; `2` = CF→nginx→app; `0` = direct only |
| IP source | `auto` (recommended), `cloudflare`, `nginx`, `x-forwarded-for`, `socket` |

Set in **Admin → DDoS → Reverse proxy**, or env:

```env
TRUST_PROXY=1
PROXY_IP_SOURCE=auto
```

Example nginx:

```nginx
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
```

---

## Environment variables

See [`.env.example`](./.env.example). Fresh `gctoac setup` writes **`NODE_ENV=production`**.

| Variable | Description |
|----------|-------------|
| `NODE_ENV` | Default **`production`**. Use `development` only for local coding (pretty logs) |
| `PORT` | Default **`3847`** (also editable in Admin → PM2) |
| `DATABASE_URL` | SQLite, e.g. `file:../data/gateway.db` (relative to `prisma/`) |
| `ENCRYPTION_KEY` | 32-byte key: `openssl rand -base64 32` |
| `GROK_BIN` | Default `grok` |
| `GROK_DEFAULT_MODEL` | Default model id |
| `GROK_DEFAULT_CWD` / `GROK_CWD_ALLOWLIST` | Agent cwd policy |
| `GROK_ALWAYS_APPROVE` | Agent only; off in safe mode |
| `GROK_SAFE_MODE` | Force all keys to safe |
| `GROK_MAX_CONCURRENT` | Max parallel Grok processes |
| `ADMIN_PANEL_ENABLED` | Hard off for `/admin` (env; restart). Runtime: `gctoac admin on\|off` |
| `PM2_ADMIN_ENABLED` | Allow Admin PM2 controls |
| `CORS_ORIGINS` | Comma-separated origins (update when changing `PORT`) |
| `RATE_LIMIT_*` / `CHAT_BURST_MAX` / `BLOCK_*` | Initial rate-limit / auto-auth defaults (overridden by DDoS policy after save) |
| `TRUST_PROXY` | Proxy hops: `0` / `1` / `2`… (`true`→1, `false`→0) |
| `PROXY_IP_SOURCE` | `auto` \| `cloudflare` \| `nginx` \| `x-forwarded-for` \| `socket` |
| `GCTOAC_HOME` | CLI data home (default `~/.gctoac`) |
| `STORAGE_DIR` | Encrypted large files + sandboxes |
| `UPLOAD_MAX_BYTES` / `DOCUMENT_DB_MAX_BYTES` | Upload / DB vs filesystem threshold |

**Back up `ENCRYPTION_KEY`.** If lost, historical data cannot be decrypted.

---

## Production

### Recommended: CLI

```bash
gctoac setup
gctoac start              # detached gctoac
# or
gctoac start --pm2        # under PM2
gctoac status
```

`gctoac restart` follows the last **preferred runner** (gctoac or PM2).

### PM2 ecosystem

```bash
npm run build
pm2 start ecosystem.config.cjs
pm2 logs grok-openai-gateway
```

### Logs

- Files under `logs/` (or data home): `pm2-error.log`, `pm2-out.log`, `gctoac.*.log`
- **Admin → PM2 → Clear logs**, or `gctoac logs clear`
- **Auto-trim:** each log read trims files **> 5 MB** down to the last ~512 KB

### Avoid EADDRINUSE

Only one runner should bind the port. If both gctoac and PM2 race:

```bash
gctoac stop
gctoac start          # or: gctoac start --pm2
gctoac doctor         # flags mixed runners
```

---

## Project layout

```text
src/           TypeScript (app, routes, services, cli)
public/admin/  Admin SPA
prisma/        Schema, migrations, seed
dist/          Built JS (gitignored; created by npm run build / prepublishOnly)
scripts/       prepare, install.sh
tests/         Vitest
```

---

## Scripts

```bash
npm run dev          # development (tsx watch)
npm run build        # prisma generate + tsc
npm start            # node dist/server.js
npm test             # unit + integration
npm run db:setup     # migrate + seed
gctoac setup|start|status|stop|doctor|logs|update
```

### Publish (maintainers)

`prepublishOnly` runs `npm run build` so the tarball includes `dist/`.

```bash
npm login
npm publish --access public --otp=<2FA_CODE>
```

---

## Security

- API keys stored as **SHA-256 hashes** only  
- Chat + documents encrypted at rest with **AES-256-GCM**  
- Prefer **`safe`** keys for any external client  
- **Client IP:** `CF-Connecting-IP` / `X-Real-IP` / `X-Forwarded-For` are trusted **only** when the TCP peer is in **Trusted proxy IPs** (default `127.0.0.1`). Direct clients cannot spoof headers to bypass rate limits or ban others.  
- Expose Admin only on localhost/VPN; admin bearer lives in `sessionStorage` (XSS = full takeover)  
- Never commit `.env` or share admin keys  
- Admin can be fully disabled: `gctoac admin off` (re-enable only via `gctoac admin on`)  
- One-click update / PM2 / port change require admin role (treat admin keys as root)

---

## 👤 Creator

**Ki (yanshekki)** — Full-stack developer, quant trader, founder of [YSK Limited](https://ysk.hk/).

🌐 [linktr.ee/yanshekki](https://linktr.ee/yanshekki) · 🏢 [ysk.hk](https://ysk.hk/)

### ☕ Support / Donate

If this Grok → OpenAI gateway helps your work, consider buying me a coffee!

| Network | Address |
| --- | --- |
| **EVM** (ETH/BSC/AVAX) | `yanshekki.eth` |
| **NEAR** | `yanshekki.near` |
| **ADA** (Cardano) | `$yanshekki` |

---

## License

MIT — see [LICENSE](./LICENSE).

## Disclaimer

This gateway spawns **Grok CLI**, which may use filesystem, shell, and network tools depending on policy. You are responsible for exposure, authentication, and key modes. Authors are not liable for misuse or data loss.
