# Grok CLI → OpenAI-Compatible Gateway

Professional Node.js gateway that exposes **OpenAI-compatible** HTTP APIs backed by local **Grok CLI** (`grok -p` headless mode).

## Stack

- Node.js 20+ / TypeScript
- Express.js
- Prisma + **SQLite** (zero external DB server)
- PM2
- AES-256-GCM encryption for chat prompts, responses, and documents
- API key auth, rate limits, concurrency limits, helmet, CORS, Zod validation
- **Safe / Agent policy**（對外安全模式）
- **Admin Panel** at `/admin/`（完整 in/out 解密檢視）

## Architecture

```
src/
  app.ts / server.ts
  config/        env, database, cors, constants
  dto/           Zod request schemas
  interfaces/    OpenAI / Grok / Express types
  entities/      domain shapes
  exceptions/    HTTP errors (OpenAI-ish JSON)
  middlewares/   auth, rate-limit, validate, upload, error
  controllers/   thin HTTP layer (+ admin.controller)
  routes/v1/     chat, models, documents, api-keys
  routes/admin   /admin/api/*
  services/      policy, settings, chat-admin, stats, grok-cli…
  utils/         logger, SSE, mappers, path safety
public/admin/    Admin SPA UI
data/            SQLite file (gateway.db, gitignored)
storage/sandboxes/  per-key safe mode cwd
```

## Prerequisites

1. **Grok CLI** installed and logged in (`grok login`)
2. **Node.js** >= 20

No MySQL/Docker required — the database is a local SQLite file at `data/gateway.db`.

## Setup

```bash
cp .env.example .env
# Generate encryption key:
openssl rand -base64 32
# → set ENCRYPTION_KEY= in .env

# Restrict Grok working directories if needed:
# GROK_DEFAULT_CWD=/path/to/workspace
# GROK_CWD_ALLOWLIST=/path/to/workspace

npm install
npm run db:setup   # migrate + seed (prints admin API key once)
# or:
# npm run prisma:migrate
# npm run seed
```

`DATABASE_URL` default (path is relative to `prisma/schema.prisma`):

```bash
DATABASE_URL="file:../data/gateway.db"
```

DB file on disk: `data/gateway.db`

## Run

```bash
# Development
npm run dev

# Production build + PM2
npm run build
pm2 start ecosystem.config.cjs
pm2 logs grok-openai-gateway
```

## Admin Panel

```text
http://127.0.0.1:3000/admin/
```

1. `npm run seed` 取得 **admin API key**（只顯示一次）
2. 開 Admin Panel，貼上 key 登入
3. 可管理：Dashboard、**Chat 完整 prompt in/out**、API Keys（safe/agent）、文件、Audit、安全設定、系統狀態

Admin JSON API 前綴：`/admin/api/*`（需要 `role=admin`）。

> 解密後的 prompt/response 極敏感，唔好把 admin key 外洩。

## 對外安全模式（Safe Mode）

| Mode | 用途 | 行為 |
|------|------|------|
| `safe`（預設 client key） | 對外 | 強制 sandbox cwd、**唔** always-approve、限制 tools、較短 timeout / max-turns |
| `agent` | 內網受信 | 全能力（可用 always-approve），cwd 仍受 allowlist |

- 全域：`GROK_SAFE_MODE=true` 或 Admin → 安全設定 →「全域 Safe Mode」
- Safe tools：`none`（禁危險 tools）或 `readonly`（只讀）
- Client **無法** 靠 body 提權（safe 下忽略任意 cwd）

## Tests & CI

```bash
npm test              # unit + integration (Vitest + SQLite)
npm run test:coverage
npm run typecheck
npm run build

# Live smoke against a running server:
API_KEY=gk_live_... npm run smoke
```

GitHub Actions (`.github/workflows/ci.yml`) runs on push/PR: install → SQLite migrate → build → test.

## API

All protected routes require:

```http
Authorization: Bearer gk_live_...
```

### Health

| Method | Path | Auth |
|--------|------|------|
| GET | `/health` | no |
| GET | `/ready` | no (DB required; Grok reported) |

### OpenAI-compatible

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/models` | List models |
| GET | `/v1/models/:model` | Get model |
| POST | `/v1/chat/completions` | Chat (supports `stream` + thinking) |

#### Chat request (extensions)

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

#### Thinking / reasoning (DeepSeek-compatible + Grok)

Grok CLI `thought` events are mapped as follows:

| Grok event | Mainstream (DeepSeek) | Grok alias / meta |
|------------|----------------------|-------------------|
| `type: thought` | `message.reasoning_content` / `delta.reasoning_content` | `message.thought` / `delta.thought` |
| `type: text` | `message.content` / `delta.content` | same |
| `type: end` | `finish_reason` | top-level `grok.sessionId`, `grok.stopReason` |

- `include_reasoning` defaults to **true**; set `false` to hide CoT from the client.
- Multi-turn prompt building uses **`content` only** (prior `reasoning_content` is not required).

Non-stream response shape (abridged):

```json
{
  "choices": [{
    "message": {
      "role": "assistant",
      "content": "final answer",
      "reasoning_content": "chain of thought...",
      "thought": "chain of thought..."
    }
  }],
  "grok": { "sessionId": "...", "stopReason": "EndTurn" }
}
```

Stream: first `delta.reasoning_content` (+ `delta.thought`), then `delta.content`, then finish (+ `grok` on last chunk).

#### Non-streaming example

```bash
curl -s http://127.0.0.1:3000/v1/chat/completions \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "grok-4.5",
    "messages": [{"role":"user","content":"Say hi in one word"}]
  }'
```

#### Streaming example

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
  // @ts-expect-error extension field
  include_reasoning: true,
});

// DeepSeek-style (may need casting depending on SDK types)
const msg = res.choices[0].message as {
  content?: string | null;
  reasoning_content?: string | null;
};
console.log(msg.reasoning_content, msg.content);
```

### Documents (encrypted storage + audit)

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/documents` | multipart `file` upload |
| GET | `/v1/documents` | list |
| GET | `/v1/documents/:id` | metadata |
| DELETE | `/v1/documents/:id` | soft delete |

```bash
curl -s http://127.0.0.1:3000/v1/documents \
  -H "Authorization: Bearer $API_KEY" \
  -F "file=@./notes.txt"
```

### API keys (admin)

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/api-keys` | create key (returns plaintext once) |
| GET | `/v1/api-keys` | list (prefix only) |
| DELETE | `/v1/api-keys/:id` | revoke |

## Security

| Control | Detail |
|---------|--------|
| Auth | Bearer API keys; only SHA-256 hash stored |
| Encryption | AES-256-GCM for prompts, responses, file bodies |
| Rate limit | Global + per-key chat limit |
| Concurrency | `GROK_MAX_CONCURRENT` caps parallel Grok spawns |
| Process | `execa` argv array (no shell); timeout; sanitized env |
| Path | `GROK_CWD_ALLOWLIST` prevents arbitrary cwd |
| Upload | size / extension / MIME allowlists |
| HTTP | helmet, CORS allowlist, body size limit |

**Back up `ENCRYPTION_KEY`.** Lost key = historical ciphertext unreadable.

## Audit trail

- Every chat request writes encrypted prompt/response into `chat_requests`
- Document upload/delete and API key lifecycle write `audit_logs`
- Sensitive fields are never logged in plaintext by pino redaction

## PM2

```bash
pm2 start ecosystem.config.cjs
pm2 status
pm2 restart grok-openai-gateway
pm2 stop grok-openai-gateway
```

Uses **fork mode, 1 instance** so concurrent Grok child processes stay predictable.

## Environment

See `.env.example` for the full list. Critical variables:

- `DATABASE_URL`
- `ENCRYPTION_KEY` (32-byte base64 or 64-char hex)
- `GROK_BIN`, `GROK_DEFAULT_MODEL`, `GROK_DEFAULT_CWD`, `GROK_CWD_ALLOWLIST`
- `GROK_TIMEOUT_MS`, `GROK_MAX_CONCURRENT`

## License

MIT
