# Grok CLI → OpenAI 相容 Gateway

[![CI](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/actions/workflows/ci.yml/badge.svg)](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/grok-cli-to-openai-compatible.svg)](https://www.npmjs.com/package/grok-cli-to-openai-compatible)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D20-brightgreen)](https://nodejs.org/)
[![Default port](https://img.shields.io/badge/port-3847-informational)](#預設-port-3847)

**語言：** [English](./README.md) | 中文

把本機 **[Grok CLI](https://x.ai)** headless 模式（`grok -p`）包裝成可上線使用嘅 **OpenAI 相容 HTTP API**，附帶加密、稽核日誌、每把 key 嘅 **safe/agent** 安全政策、完整 **Admin Panel**，以及控制用 CLI（`gctoac` / `gcoa`）。

| | |
|--|--|
| **npm 套件** | [`grok-cli-to-openai-compatible`](https://www.npmjs.com/package/grok-cli-to-openai-compatible) |
| **CLI** | `gctoac` · 短名 `gcoa` |
| **預設 port** | **`3847`**（本專案專用；可用 `PORT=` 覆蓋） |

```text
Client (OpenAI SDK / curl)
        │  Authorization: Bearer gk_live_...
        ▼
┌───────────────────────────────────────┐
│  Express Gateway :3847                │
│  · 認證 / 限流 / 驗證                 │
│  · Safe | Agent 政策                  │
│  · 每筆 chat 加密 + 稽核              │
│  · Admin Panel @ /admin               │
│  · CLI: gctoac start|stop|status|update│
└───────────────────┬───────────────────┘
                    │ spawn
                    ▼
              grok -p …  （本機 CLI）
```

---

## 安裝（npm）

### 全域（建議日常使用）

```bash
# 建議先清走半殘安裝：
npm uninstall -g grok-cli-to-openai-compatible 2>/dev/null || true

# 已 publish 到 npm 後：
npm install -g grok-cli-to-openai-compatible

# 或直接由 GitHub 安裝（隨時可用）：
npm install -g github:yanshekki/Grok-Cli-to-OpenAI-compatible

# 若見到大量 tar TAR_ENTRY_ERROR，可清 cache 再裝一次：
npm cache clean --force
npm install -g github:yanshekki/Grok-Cli-to-OpenAI-compatible --prefer-online

gctoac doctor
gctoac setup          # ~/.gctoac — .env、migrate、admin key
gctoac start          # 背景執行，port 3847
gctoac status
gcoa open             # 同一支 binary 嘅短名
```

全域資料目錄：**`~/.gctoac/`**（可用 `GCTOAC_HOME` 或 `gctoac --home /path` 覆蓋）。

> **說明：** `TAR_ENTRY_ERROR … effect/` 多數係 npm + Prisma 解壓 race 嘅無害警告。  
> 重點係裝完後 `which gctoac` 同 `gctoac doctor` 要成功。

### 專案內安裝

```bash
npm install grok-cli-to-openai-compatible
npx gctoac setup
npx gctoac start --foreground
```

### 由原始碼

```bash
git clone https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible.git
cd Grok-Cli-to-OpenAI-compatible
npm install
npm run build
npx gctoac setup      # 喺 repo 內會用專案 ./data
npx gctoac start
```

---

## CLI 指令（`gctoac` / `gcoa`）

| 指令 | 說明 |
|------|------|
| `gctoac setup` | 建立資料目錄、`.env`、migrate、seed admin key |
| `gctoac start` | 背景啟動 gateway |
| `gctoac start -f` | 前景啟動 |
| `gctoac stop` | 停止背景行程 |
| `gctoac restart` | 停止後再啟動 |
| `gctoac status` | 顯示 PID + `/health` |
| `gctoac migrate` | 執行 `prisma migrate deploy` |
| `gctoac seed` | 產生 bootstrap admin API key |
| `gctoac doctor` | 檢查 Node、Grok CLI、env、build |
| `gctoac update` | **自我更新**（git / npm / GitHub）後重啟 |
| `gctoac update --check` | 只檢查有無新版本 |
| `gctoac update --no-restart` | 更新但唔重啟 |
| `gctoac open` | 印出 API / Admin URL |
| `gctoac open --admin` | 只印 Admin URL |
| `gctoac version` | 套件版本 |

**全域參數：**

```bash
gctoac --home ~/.gctoac-alt setup
gctoac --port 3847 start
```

---

## 預設 port `3847`

| URL | 用途 |
|-----|------|
| `http://127.0.0.1:3847/v1` | OpenAI 相容 API base |
| `http://127.0.0.1:3847/admin/` | Admin 控制台 |
| `http://127.0.0.1:3847/health` | 存活檢查 |

可用 `.env` 嘅 `PORT=` 或 `gctoac --port … start` 覆蓋。

---

## 功能一覽

| 範疇 | 內容 |
|------|------|
| **OpenAI API** | `POST /v1/chat/completions`（stream / 非 stream）、`GET /v1/models` |
| **Thinking** | DeepSeek 式 `reasoning_content` + Grok `thought` + `grok.*` metadata |
| **文件** | 加密上傳；chat 可用 `document_ids` 注入 |
| **安全模式** | 每 key `safe` / `agent`；可全域強制 safe |
| **加密** | AES-256-GCM 加密 prompt、response、文件內容 |
| **Admin UI** | 儀表板、完整 chat 解密 in/out、keys、文件、audit、設定 |
| **CLI** | `gctoac` / `gcoa` 生命週期 + **自我更新** |
| **一鍵更新** | Admin → 系統狀態 → 一鍵更新並重啟 |
| **運維** | SQLite、PM2、GitHub Actions CI、結構化 log |

---

## 技術棧

- **Runtime：** Node.js 20+、TypeScript（strict）
- **HTTP：** Express、Helmet、CORS、express-rate-limit、Zod
- **資料：** Prisma + **SQLite**
- **CLI：** Commander（`gctoac` / `gcoa`）
- **行程：** PM2（fork、單 instance）或 `gctoac start`
- **Grok：** 本機 CLI，經 `execa` 以 argv 呼叫（唔經 shell）

---

## 前置要求

1. [Node.js](https://nodejs.org/) ≥ 20  
2. 已安裝並登入 [Grok CLI](https://x.ai)：

```bash
curl -fsSL https://x.ai/cli/install.sh | bash
grok login
grok --version
```

---

## 快速開始（原始碼 / 開發）

```bash
git clone https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible.git
cd Grok-Cli-to-OpenAI-compatible

cp .env.example .env
# 產生 32-byte key，貼入 ENCRYPTION_KEY=
openssl rand -base64 32

npm install
npm run db:setup    # migrate + seed（admin key 只顯示一次）

npm run dev
# → API:   http://127.0.0.1:3847
# → Admin: http://127.0.0.1:3847/admin/
```

或：`npm run build && gctoac setup && gctoac start`

### 首次 Admin 登入

1. 複製 `gctoac setup` / `npm run seed` 印出嘅 **admin API key**（只顯示一次）。  
2. 開啟 **http://127.0.0.1:3847/admin/**  
3. 貼上 key 登入。  
4. 建立 **client** key（對外用 `mode=safe`；受信內網可用 `mode=agent`）。

> **安全提示：** Admin 可解密所有 chat 嘅 prompt/response。唔好 commit `.env`，亦唔好外洩 admin key。

---

## 生產環境（PM2）

```bash
npm run build
pm2 start ecosystem.config.cjs
pm2 status
pm2 logs grok-openai-gateway
```

使用 **fork 模式、1 個 instance**，方便管理並行 Grok 子進程。

---

## 專案結構

```text
src/
  app.ts / server.ts          # Express 與優雅關閉
  config/                     # env、database、cors、constants
  dto/                        # Zod schema
  interfaces/                 # OpenAI / Grok / auth 型別
  entities/                   # 領域形狀
  exceptions/                 # HTTP 錯誤（OpenAI 風格 JSON）
  middlewares/                # auth、限流、validate、upload…
  controllers/                # HTTP 層（含 admin）
  routes/v1/                  # 公開 OpenAI 相容 API
  routes/admin.routes.ts      # /admin/api/*
  cli/                        # gctoac / gcoa 指令
  services/                   # 業務邏輯
    grok-cli.service.ts       # 啟動與解析 CLI
    policy.service.ts         # safe/agent 政策
    chat.service.ts           # completions + 加密稽核
    chat-admin.service.ts     # admin 解密
    update.service.ts         # 自我更新
    …
  utils/                      # logger、SSE、mapper、path-safe
public/admin/                 # Admin SPA（靜態）
prisma/                       # schema、migrations、seed
data/                         # gateway.db（gitignore）
storage/                      # 加密檔案 + sandbox
tests/                        # Vitest 單元與整合測試
```

---

## Admin Panel

| 頁面 | 能力 |
|------|------|
| **儀表板** | 總量、24h 流量、併發、最近 chat |
| **Chat 記錄** | 列表 + **完整解密 prompt / reasoning / content** |
| **API Keys** | 建立 / 編輯 `role` + `mode` + rate limit / 撤銷 |
| **文件** | 列表、解密預覽 modal、軟刪除 |
| **Audit Logs** | 生命週期事件 |
| **安全設定** | 全域 safe mode、tools 政策、timeout、預設 model |
| **系統狀態** | DB / Grok CLI / 版本 / **一鍵更新並重啟** |

**Admin JSON API**（Bearer admin key）：

| Method | Path |
|--------|------|
| GET | `/admin/api/me` |
| GET | `/admin/api/stats` |
| GET | `/admin/api/chats`、`/admin/api/chats/:id` |
| GET/POST/PATCH/DELETE | `/admin/api/keys`… |
| GET/DELETE | `/admin/api/documents`… |
| GET | `/admin/api/audit-logs` |
| GET/PUT | `/admin/api/settings` |
| GET | `/admin/api/system` |
| GET | `/admin/api/system/update-check` |
| POST | `/admin/api/system/update` |

---

## Safe / Agent 政策

| Mode | 預設對象 | 行為 |
|------|----------|------|
| **`safe`** | 新 client key | 強制 sandbox cwd（`storage/sandboxes/{keyId}`）、**唔**加 `--always-approve`、限制 tools、較短 timeout / max-turns |
| **`agent`** | Admin / 受信 | 完整 CLI 能力（可 always-approve）；cwd 仍受 `GROK_CWD_ALLOWLIST` 限制 |

- **全域強制 safe：** `GROK_SAFE_MODE=true` **或** Admin → 安全設定 → 全域 Safe Mode  
- Client **無法** 靠 request body 提權（safe 下會忽略任意 `cwd`）。

> 用 `agent` key 公開上公網好危險：Grok CLI 係帶 **tools 嘅 agent**，唔係純 chat API。對外請優先用 **`safe`**。

---

## 公開 API

受保護路由需要：

```http
Authorization: Bearer gk_live_...
```

### Health

| Method | Path | Auth |
|--------|------|------|
| GET | `/health` | 唔需要 |
| GET | `/ready` | 唔需要（需 DB；會回報 Grok CLI） |

### OpenAI 相容

| Method | Path | 說明 |
|--------|------|------|
| GET | `/v1/models` | 模型列表 |
| GET | `/v1/models/:model` | 單一模型 |
| POST | `/v1/chat/completions` | Chat（`stream`、thinking） |

#### Chat body（擴充欄位）

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

| 欄位 | 說明 |
|------|------|
| `include_reasoning` | 預設 `true`。Grok `thought` → `reasoning_content` |
| `cwd` | 只喺 **agent** 且 allowlist 內生效；**safe** 強制 sandbox |
| `session_id` | 傳俾 `grok -s` 做多輪 session |
| `document_ids` | 解密文件後注入 system context |

#### Thinking 對應

| Grok CLI 事件 | 主流（DeepSeek） | Grok 擴充 |
|---------------|------------------|-----------|
| `type: thought` | `reasoning_content` / `delta.reasoning_content` | `thought` / `delta.thought` |
| `type: text` | `content` / `delta.content` | 相同 |
| `type: end` | `finish_reason` | `grok.sessionId`、`grok.stopReason` |

Stream 順序：**reasoning → content → finish（+ `grok`）→ `[DONE]`**。

#### curl 範例

**非 stream**

```bash
export API_KEY=gk_live_...

curl -s http://127.0.0.1:3847/v1/chat/completions \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "grok-4.5",
    "messages": [{"role":"user","content":"用一個字打招呼"}]
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
    "messages": [{"role":"user","content":"數到 3"}]
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

### 文件

| Method | Path | 說明 |
|--------|------|------|
| POST | `/v1/documents` | multipart 欄位 `file` |
| GET | `/v1/documents` | 列表 |
| GET | `/v1/documents/:id` | metadata |
| DELETE | `/v1/documents/:id` | 軟刪除 |

```bash
curl -s http://127.0.0.1:3847/v1/documents \
  -H "Authorization: Bearer $API_KEY" \
  -F "file=@./notes.txt"
```

### API keys（admin role，經 `/v1` 或 Admin Panel）

| Method | Path | 說明 |
|--------|------|------|
| POST | `/v1/api-keys` | 建立（明文 **只回一次**） |
| GET | `/v1/api-keys` | 列表（只有 prefix） |
| DELETE | `/v1/api-keys/:id` | 撤銷 |

---

## 環境變數

詳見 [`.env.example`](.env.example)。關鍵項目：

| 變數 | 說明 |
|------|------|
| `DATABASE_URL` | SQLite 路徑，例如絕對 `file:/…/gateway.db` 或相對 `prisma/` 嘅 `file:../data/gateway.db` |
| `ENCRYPTION_KEY` | 32-byte key，base64 或 64 字 hex（`openssl rand -base64 32`） |
| `GROK_BIN` | CLI 執行檔（預設 `grok`） |
| `GROK_DEFAULT_MODEL` | 預設模型 id |
| `GROK_DEFAULT_CWD` / `GROK_CWD_ALLOWLIST` | **agent** 模式 cwd 政策 |
| `GROK_ALWAYS_APPROVE` | 只對 agent；safe 一律關閉 |
| `GROK_SAFE_MODE` | 強制所有 key 用 safe |
| `GROK_SAFE_MAX_TURNS` / `GROK_SAFE_TIMEOUT_MS` | safe 預設值 |
| `GROK_MAX_CONCURRENT` | 最多並行 Grok 進程 |
| `ADMIN_PANEL_ENABLED` | `/admin` 總開關 |
| `CORS_ORIGINS` | 逗號分隔 origins |
| `PORT` / `HOST` | 監聽位址（**預設 `3847`** / `0.0.0.0`） |
| `GCTOAC_HOME` | CLI 資料目錄（全域安裝預設 `~/.gctoac`） |

**請備份 `ENCRYPTION_KEY`。** 遺失後歷史密文無法還原。

---

## 安全摘要

| 控制 | 說明 |
|------|------|
| 認證 | Bearer API key；DB 只存 SHA-256 **hash** |
| 加密 | chat + 文件 AES-256-GCM 靜態加密 |
| Safe 政策 | sandbox cwd、限制 tools、唔 always-approve |
| 限流 | 全域 + 每 key |
| 併發 | 限制 Grok 子進程數量 |
| 進程 | 只用 `execa` argv；清理敏感 env |
| 路徑 | agent 用 allowlist；safe 強制 sandbox |
| 上傳 | 大小 / 副檔名 / MIME 白名單 |
| HTTP | Helmet、CORS、body 大小限制 |
| 稽核 | 加密 chat + admin 操作 `audit_logs` |

---

## 腳本

```bash
npm run dev           # tsx watch
npm run build         # tsc → dist/（+ chmod CLI）
npm start             # node dist/server.js
npm test              # Vitest
npm run typecheck
npm run db:setup      # migrate deploy + seed
npm run seed          # bootstrap admin key
npm run smoke         # API_KEY=... bash scripts/smoke.sh
gctoac setup|start|status|stop|doctor|update
```

### 發佈到 npm（維護者）

```bash
npm login
npm run build
npm publish --access public
```

未 publish 時可由 GitHub 安裝：

```bash
npm install -g github:yanshekki/Grok-Cli-to-OpenAI-compatible
```

---

## 授權

MIT — 見 [LICENSE](./LICENSE)。

---

## 免責聲明

本專案會 spawn **Grok CLI**，視政策與參數可能執行檔案系統、shell、網路等 tools。認證、網路暴露、key 模式（`safe` / `agent`）由你負責。作者不對濫用或資料損失負責。
