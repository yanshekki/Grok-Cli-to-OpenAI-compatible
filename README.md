# Grok CLI → OpenAI-Compatible Gateway

Professional Node.js gateway that exposes **OpenAI-compatible** HTTP APIs backed by local **Grok CLI** (`grok -p` headless mode).

## Stack

- Node.js 20+ / TypeScript
- Express.js
- Prisma + **SQLite** (zero external DB server)
- PM2
- AES-256-GCM encryption for chat prompts, responses, and documents
- API key auth, rate limits, concurrency limits, helmet, CORS, Zod validation

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
  controllers/   thin HTTP layer
  routes/v1/     chat, models, documents, api-keys
  services/      business logic + Grok CLI integration
  utils/         logger, SSE, mappers, path safety
data/            SQLite file (gateway.db, gitignored)
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
| POST | `/v1/chat/completions` | Chat (supports `stream: true`) |

#### Chat request (extensions)

```json
{
  "model": "grok-4.5",
  "messages": [{ "role": "user", "content": "Hello" }],
  "stream": false,
  "cwd": "/allowed/workspace",
  "session_id": "optional-grok-session",
  "document_ids": ["uuid-of-uploaded-doc"]
}
```

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
});
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
