# Grok CLI → OpenAI 相容 Gateway

[![CI](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/actions/workflows/ci.yml/badge.svg)](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/grok-cli-to-openai-compatible.svg)](https://www.npmjs.com/package/grok-cli-to-openai-compatible)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D20-brightgreen)](https://nodejs.org/)
[![Port](https://img.shields.io/badge/port-3847-informational)](#預設-port)

**語言：** [English](./README.md) · 中文

將本機 **[Grok CLI](https://x.ai)**（`grok -p` headless）包裝成可上線的 **OpenAI 相容 HTTP API**。

| | |
|--|--|
| **npm** | [`grok-cli-to-openai-compatible`](https://www.npmjs.com/package/grok-cli-to-openai-compatible) |
| **CLI** | `gctoac` · 短名 `gcoa` |
| **預設 port** | **`3847`** |
| **NODE_ENV 預設** | **`production`**（本機開發才設 `development`） |

**主要能力**

- OpenAI 相容 `POST /v1/chat/completions`（stream / 非 stream）
- Thinking / `reasoning_content`（DeepSeek 風格 + Grok `thought`）
- 每把 key 的 **safe** / **agent** 政策 + 全域安全覆寫
- AES-256-GCM 加密 + 完整 chat 稽核
- **Admin Panel** — OTP 登入（`gctoac admin otp`）、儀表板、對話、金鑰、文件、稽核、用量、**對話佇列**、**DDoS 中心**、安全設定、PM2、系統更新
- **持久化對話佇列** — 每個對話先入隊（Kafka 級租約語意）再由進程內 worker 消費；Admin 可暫停／排空／取消／死信；可選 `Idempotency-Key`
- **DDoS／防濫用** — 可配置限流、多規則自動封鎖、反向代理真實客戶端 IP（nginx / Cloudflare）
- 控制 CLI：setup、start/stop/restart、status、doctor、logs、update、keys、**`admin otp`**、admin on/off

```text
Client (OpenAI SDK / curl / Open WebUI)
        │  Authorization: Bearer gk_live_...
        ▼
   Express Gateway :3847
   · 認證 · 限流 · safe/agent
   · 入隊 ChatJob（AES-GCM payload）· SSE 以 gog.queue 佔位
   · 代理感知 Client IP · 自動封鎖
   · 加密稽核 · Admin /admin（佇列控制）
   · gctoac start | stop | status | update
        │
        ▼
   進程內 worker（租約 / 公平輪詢 / 併發）
        │
        ▼
   grok -p …  （本機 Grok CLI）
```

---

## 快速開始

### 1. 前置要求

- **Node.js** ≥ 20  
- 已安裝並登入 **Grok CLI**：

```bash
curl -fsSL https://x.ai/cli/install.sh | bash
grok login
grok --version
```

### 2. 安裝並啟動

```bash
npm install -g grok-cli-to-openai-compatible

gctoac doctor   # 檢查 Node / Grok / 環境 / runner / 代理
gctoac setup    # 資料目錄、.env（NODE_ENV=production）、資料庫、admin API key
gctoac start    # http://127.0.0.1:3847
gctoac status   # runner、port、proxy、health
```

開啟 Admin（OTP 登入 — **不會**在瀏覽器長期保存 API key）：

```bash
gctoac admin otp     # 產生一次性登入碼（5 分鐘、單次使用）
```

```text
http://127.0.0.1:3847/admin/
```

在登入頁貼上 OTP。**每次登入都要新碼**（session 約 12 小時）。

**API** 存取（OpenAI client／腳本）請用 `gk_live_…` key：

```bash
gctoac key create    # 明文只顯示一次（預設 role: admin）
gctoac key list      # 只顯示 prefix（明文不會存庫）
```

**資料目錄：** `~/.gctoac/`  
可用 `GCTOAC_HOME` 或 `gctoac --home /path` 覆蓋。

### 3. 呼叫 API

```bash
export API_KEY=gk_live_...   # setup 或 Admin 取得

curl -s http://127.0.0.1:3847/v1/chat/completions \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "grok-4.5",
    "messages": [{"role":"user","content":"用一個字打招呼"}]
  }'
```

---

## 安裝

**支援方式：** 只從 **npm registry** 安裝。

```bash
npm install -g grok-cli-to-openai-compatible
```

可選輔助腳本（等同上面指令）：

```bash
curl -fsSL https://raw.githubusercontent.com/yanshekki/Grok-Cli-to-OpenAI-compatible/main/scripts/install.sh | bash
```

### 專案依賴

```bash
npm install grok-cli-to-openai-compatible
npx gctoac setup
npx gctoac start --foreground
```

### 由原始碼開發（貢獻者）

`dist/` **不會** commit 到 git。clone 後請自行 build：

```bash
git clone https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible.git
cd Grok-Cli-to-OpenAI-compatible
npm install
npm run build
npm link          # 可選：把 gctoac 掛到 PATH
```

> **不要** 使用 `npm install -g github:…`（不支援）。

### 更新

```bash
npm install -g grok-cli-to-openai-compatible@latest
# 或
gctoac update              # 自我更新並排程重啟
gctoac update --check      # 只檢查
gctoac update --no-restart
```

亦可在 Admin → **系統狀態** → 一鍵更新。

---

## 預設 port

| URL | 用途 |
|-----|------|
| `http://127.0.0.1:3847/v1` | OpenAI 相容 API base |
| `http://127.0.0.1:3847/admin/` | Admin 控制台 |
| `http://127.0.0.1:3847/health` | 健康檢查 |

更改監聽連接埠（會寫入 `.env`；Admin 儲存時會重啟 runner）：

```bash
# CLI — 寫入 PORT 到 .env 並啟動
gctoac --port 4000 start
gctoac --port 4000 start --pm2

# 或編輯 .env
PORT=4000
```

**Admin → PM2 → 監聽連接埠** — 預設 **3847**，儲存並重啟。改完請用**新 port** 開啟 Admin（例如 `http://127.0.0.1:4000/admin/`）。

---

## CLI（`gctoac` / `gcoa`）

全域選項：`--home <path>`、`--port <n>`（預設 **3847**）。

| 指令 | 說明 |
|------|------|
| `gctoac setup` | 建目錄、`.env`、migrate、seed admin key，盡量安裝 pm2 |
| `gctoac start` | 背景啟動 gateway（detached gctoac） |
| `gctoac start -f` | 前景啟動 |
| `gctoac start --pm2` | 用 PM2 啟動 |
| `gctoac stop` | 停止 gctoac + PM2 app + 清 port 佔用 |
| `gctoac restart` | 重啟；跟從 **preferred runner**（上次用 PM2 則用 PM2） |
| `gctoac restart --pm2` | 強制用 PM2 重啟 |
| `gctoac status` | Runner、NODE_ENV、port、trust proxy／IP 來源、health |
| `gctoac doctor` | 全面檢查（代理、雙 runner、port 衝突、log 大小） |
| `gctoac logs` / `logs show` | 查看 pm2 + gctoac 日誌 |
| `gctoac logs clear` | 清空日誌（與 Admin 清除一致） |
| `gctoac admin status` | Admin 面板開關狀態 |
| `gctoac admin on` / `off` | 開關 Admin（DB；**只能用 CLI `on` 重開**） |
| `gctoac admin otp` | 一次性 Admin **SPA 登入碼**（5 分鐘、單次；別名 `login-code`） |
| `gctoac migrate` | Prisma migrate deploy |
| `gctoac seed` | 產生 admin API key（若未有） |
| `gctoac key` / `key create` | 建立 API key（明文只顯示一次） |
| `gctoac key list` | 列出 keys（只有 prefix） |
| `gctoac key revoke <id>` | 撤銷 key |
| `gctoac update` | 自我更新後重啟 |
| `gctoac update --check` | 只檢查有無新版本 |
| `gctoac update --no-restart` | 更新但不重啟 |
| `gctoac open` | 印出 API / Admin URL |
| `gctoac version` | 顯示版本 |

```bash
gctoac --home ~/.gctoac-alt setup
gctoac --port 3847 start
gctoac status
gctoac admin otp       # 開啟 Admin SPA 登入
gctoac logs clear
```

---

## 功能一覽

| 功能 | 說明 |
|------|------|
| OpenAI API | `POST /v1/chat/completions`（stream / 非 stream）、`GET /v1/models` |
| Thinking | `reasoning_content` + Grok `thought` + `grok.*` |
| 文件 | 類型嗅探上傳、加密儲存（DB 或檔案系統）、下載 |
| Safe / Agent | 每 key 政策；可全域強制 safe |
| 加密 | AES-256-GCM 加密 prompt、response、檔案 |
| 對話歷史 | 多輪對話、上下文模式（full / summary / recent） |
| Admin Panel | OTP session 登入、儀表板、對話、金鑰、文件、稽核、用量、**佇列**、DDoS、安全設定、PM2、系統 |
| 對話佇列 | 持久化 SQLite 工作、公平輪詢、暫停／排空、死信、Idempotency-Key、`QUEUE_BACKEND` |
| DDoS 中心 | 即時連線、黑名單、自動封鎖、可配置策略與預設檔 |
| 反向代理 | 信任層數 + CF / nginx / X-Forwarded-For 真實 IP |
| 認證 | API key：**scrypt** hash（舊 SHA-256 登入時自動升級）；Admin SPA：OTP → session |
| CLI | 生命週期、preferred runner、日誌、自我更新、`admin otp` |
| 運維 | SQLite、PM2、日誌自動裁剪（>5 MB）、GitHub Actions CI |

---

## API

受保護路由需要：

```http
Authorization: Bearer gk_live_...
```

### Chat（stream）

佇列啟用時（預設），stream 可能先出現 `gog.queue` 排隊事件，再是一般 OpenAI chunk。

```bash
curl -sN http://127.0.0.1:3847/v1/chat/completions \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -H "Idempotency-Key: my-client-req-001" \
  -d '{
    "model": "grok-4.5",
    "stream": true,
    "include_reasoning": true,
    "messages": [{"role":"user","content":"數到 3"}]
  }'
```

`Idempotency-Key` 可選（依 API key 隔離）。同一 key 在 job 進行中可安全重試。

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

### Chat body 擴充欄位

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

| 欄位 | 說明 |
|------|------|
| `include_reasoning` | 預設 `true`；Grok `thought` → `reasoning_content` |
| `cwd` | 僅 **agent**（allowlist 內）；**safe** 強制 sandbox |
| `session_id` | 傳給 `grok -s` |
| `document_ids` | 注入已解密文件內容 |

### Thinking 對應

| Grok 事件 | OpenAI / DeepSeek 欄位 | 額外 |
|-----------|------------------------|------|
| `thought` | `reasoning_content` / `delta.reasoning_content` | `thought` 別名 |
| `text` | `content` / `delta.content` | — |
| `end` | `finish_reason` | `grok.sessionId`、`grok.stopReason` |

### 持久化對話佇列

佇列政策**啟用**時（預設），每個 `POST /v1/chat/completions` 會寫入 `ChatJob` 表，再由進程內 worker 以租約／心跳／開機回收語意消費。

| 主題 | 行為 |
|------|------|
| **語意** | At-least-once；claim 時 visibility timeout（lease）；重啟回收 in-flight |
| **公平** | 預設依 API key **加權輪詢**，或全域 FIFO；每 key + 全域併發上限 |
| **Stream** | 連線保持；先收到 `object: "gog.queue"` 排隊事件，再是一般 OpenAI chunk |
| **背壓** | `maxQueueDepth` / `maxQueueDepthPerKey` → **429** `queue_full`；drain／停用 → **503** `queue_draining`；等待逾時 → **504**；取消 → **409** |
| **冪等** | 可選 `Idempotency-Key`（依 API key 隔離）。進行中重用；成功回 already-done；失敗／死信／取消後可重試 |
| **後端** | `QUEUE_BACKEND=sqlite`（預設、可上線）。`redis`／`kafka` 預留給多機（尚未實作 — 選用會啟動失敗） |
| **Payload** | Job 內容以 AES-GCM 加密存於 `ChatJob` |
| **Admin** | **佇列**頁：KPI、暫停／排空、政策、狀態篩選（含死信／`active`）、取消／重新入隊／優先級／清理已完成（24h+） |

Stream 預覽：

```text
data: {"object":"gog.queue","status":"queued","job_id":"…","position":2}
data: {"object":"gog.queue","status":"queued","job_id":"…","position":1}
data: {"id":"chatcmpl-…","object":"chat.completion.chunk",…}
```

Admin 操作（OTP **session** token 或 admin API key）：

```http
GET  /admin/api/queue/stats
GET  /admin/api/queue/jobs?status=dead
GET  /admin/api/queue/jobs?status=active
POST /admin/api/queue/pause | /resume | /drain | /undrain
PUT  /admin/api/queue/policy
POST /admin/api/queue/jobs/:id/cancel | /requeue
POST /admin/api/queue/jobs/:id/priority   # body: {"priority":0-1000}
POST /admin/api/queue/purge-dead
```

### 端點

| Method | Path | 說明 |
|--------|------|------|
| GET | `/health` | 存活 |
| GET | `/ready` | DB + Grok 檢查 |
| GET | `/v1/models` | 模型列表 |
| POST | `/v1/chat/completions` | 對話（佇列啟用時先排隊；可選 `Idempotency-Key`） |
| POST | `/v1/documents` | 上傳（欄位 `file`） |
| GET/DELETE | `/v1/documents`… | 列表 / 軟刪除 |
| POST/GET/DELETE | `/v1/api-keys`… | Admin 管理 key |
| POST | `/admin/api/auth/login` | OTP → session token（公開，有限流） |
| POST | `/admin/api/auth/logout` | 撤銷 session |
| * | `/admin/api/*` | Admin JSON API（OTP session **或** `role=admin` API key） |

---

## Safe / Agent 政策

| Mode | 適用 | 行為 |
|------|------|------|
| **`safe`**（client 預設） | 對外應用 | Sandbox cwd、不 always-approve、限制 tools、較短 timeout |
| **`agent`** | 受信 / 內網 | 完整 CLI tools（可 always-approve）；cwd 仍受 allowlist 限制 |

- 全域強制 safe：`GROK_SAFE_MODE=true` 或 Admin → **安全設定**  
- Client **無法** 靠 request body 提權  
- **不要** 將 `agent` key 暴露於公網  

---

## Admin Panel

```text
http://127.0.0.1:3847/admin/
```

### 登入（OTP）

Admin **SPA 不會接受長期 API key**。請產生一次性登入碼：

```bash
gctoac admin otp          # 別名：gctoac admin login-code
```

- 有效 **5 分鐘**、**單次使用**
- Session token 存於 `sessionStorage`（約 **12 小時**）
- 登出／逾時／換瀏覽器後需重新取碼

Admin **JSON API**（`/admin/api/*`）可用：

- `Authorization: Bearer gog_sess_…`（OTP session），或  
- `Authorization: Bearer gk_live_…`（`role=admin`）

| 頁面 | 功能 |
|------|------|
| **儀表板** | 24h KPI、成功率、**佇列深度**、防護摘要、模型用量、運行狀態（port／加密） |
| **對話** | 多輪 playground、歷史、上下文模式、附件（佇列啟用時同樣先入隊） |
| **對話記錄** | 搜尋／篩選／分頁；**完整解密** prompt／reasoning／response |
| **API 金鑰** | 建立／編輯 mode／role／限流／IP 白名單；撤銷 |
| **文件** | 搜尋／篩選／分頁；預覽、下載、刪除；DB 與檔案系統儲存 |
| **稽核日誌** | 搜尋／篩選／分頁；可讀動作標籤 |
| **用量與防護** | 24h 統計、按模型／按金鑰分 tab、限流摘要 |
| **佇列** | 持久化工作列表、死信／狀態篩選、暫停／排空、併發與公平政策、取消／重新入隊／優先級／清理 |
| **DDoS 中心** | 即時連線、黑名單、自動封鎖事件、**可配置防護策略**（寬鬆／均衡／嚴格／自訂）、反向代理 IP |
| **安全設定** | 全域 safe、safe tools／turns／timeout、預設模型、關閉 Admin 面板（只能用 CLI 重開） |
| **PM2** | Runner 切換（gctoac ↔ PM2）、**監聽連接埠**（預設 3847）、設定、**清除日誌** + 自動裁剪 |
| **系統狀態** | 健康、軟體檢查、一鍵更新並重啟 |

### DDoS／防濫用（運行時）

策略存於資料庫（Admin → DDoS）。環境變數只是**初始預設**；儲存後以 Admin 為準。可用「重設為環境預設」還原。

| 能力 | 說明 |
|------|------|
| 限流 | 視窗、每 key 上限、每 IP 上限、chat burst |
| 自動封鎖 | 失敗認證、重複 429、並發洪水、請求速率、累犯升級 |
| 預設檔 | 寬鬆／均衡／嚴格／自訂（自動判定） |
| 白名單 | 永不被自動封鎖（例如 `127.0.0.1`） |
| 手動封鎖 | TTL 或永久 |

### 反向代理／CDN（客戶端 IP）

經 **nginx** 或 **Cloudflare** 時，請設定信任層數，令封鎖、限流、稽核使用**真實用戶 IP**：

| 設定 | 常見值 |
|------|--------|
| 信任代理層數 | `1` = nginx 或 CF→應用；`2` = CF→nginx→應用；`0` = 僅直連 |
| IP 來源 | `auto`（建議）、`cloudflare`、`nginx`、`x-forwarded-for`、`socket` |

在 **Admin → DDoS → 反向代理** 設定，或 env：

```env
TRUST_PROXY=1
PROXY_IP_SOURCE=auto
```

nginx 示例：

```nginx
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
```

---

## 環境變數

詳見 [`.env.example`](./.env.example)。`gctoac setup` 新建時預設 **`NODE_ENV=production`**。

| 變數 | 說明 |
|------|------|
| `NODE_ENV` | 預設 **`production`**。本機開發才設 `development`（美化日誌） |
| `PORT` | 預設 **`3847`**（亦可在 Admin → PM2 修改） |
| `HOST` | 監聽位址（預設 `0.0.0.0`） |
| `DATABASE_URL` | SQLite，例如 `file:../data/gateway.db`（相對 `prisma/`） |
| `ENCRYPTION_KEY` | 32-byte key：`openssl rand -base64 32` |
| `ADMIN_BOOTSTRAP_KEY` | 可選；首次 setup 用此字串作 admin key |
| `GROK_BIN` | 預設 `grok` |
| `GROK_DEFAULT_MODEL` | 預設模型 |
| `GROK_DEFAULT_CWD` / `GROK_CWD_ALLOWLIST` | Agent cwd 政策 |
| `GROK_TIMEOUT_MS` | Agent 預設 timeout（ms） |
| `GROK_ALWAYS_APPROVE` | 只對 agent；safe 一律關閉 |
| `GROK_SAFE_MODE` | 強制全部 key 用 safe |
| `GROK_SAFE_MAX_TURNS` / `GROK_SAFE_TIMEOUT_MS` | Safe 模式預設（亦可在 Admin → 安全設定改） |
| `GROK_MAX_CONCURRENT` | 最多並行 Grok 進程（亦作佇列全域併發預設種子） |
| `QUEUE_BACKEND` | 對話佇列後端：**`sqlite`**（預設）。`redis`／`kafka` 預留（尚未實作） |
| `ADMIN_PANEL_ENABLED` | 硬關 `/admin`（env，需重啟）。運行時：`gctoac admin on\|off` |
| `PM2_ADMIN_ENABLED` | 允許 Admin 控制 PM2 |
| `CORS_ORIGINS` | 逗號分隔 origins（改 `PORT` 時請一併更新） |
| `RATE_LIMIT_*` / `CHAT_BURST_MAX` / `BLOCK_*` | 限流／自動認證初始值（DDoS 策略儲存後會覆寫） |
| `TRUST_PROXY` | 代理層數：`0`／`1`／`2`…（`true`→1，`false`→0） |
| `PROXY_IP_SOURCE` | `auto` \| `cloudflare` \| `nginx` \| `x-forwarded-for` \| `socket` |
| `GCTOAC_HOME` | CLI 資料目錄（預設 `~/.gctoac`） |
| `STORAGE_DIR` | 加密大檔 + sandbox |
| `UPLOAD_MAX_BYTES` / `DOCUMENT_DB_MAX_BYTES` | 上傳上限／DB 與檔案系統分界 |
| `BODY_LIMIT` | JSON body 大小上限（預設 `1mb`） |
| `LOG_LEVEL` | `fatal` \| `error` \| `warn` \| `info` \| `debug` \| `trace` |

**請備份 `ENCRYPTION_KEY`。** 遺失後歷史資料無法解密。

運行時佇列政策（併發、公平、暫停／排空、深度）存於 DB（`queue_policy`），在 **Admin → 佇列** 編輯 — 不只靠 env。

---

## 生產環境

### 建議：CLI

```bash
gctoac setup
gctoac start              # detached gctoac
# 或
gctoac start --pm2        # 使用 PM2
gctoac status
```

`gctoac restart` 會跟從上次的 **preferred runner**（gctoac 或 PM2）。

### PM2 ecosystem

```bash
npm run build
pm2 start ecosystem.config.cjs
pm2 logs grok-openai-gateway
```

### 日誌

- 檔案位於 `logs/`（或資料目錄）：`pm2-error.log`、`pm2-out.log`、`gctoac.*.log`
- **Admin → PM2 → 清除日誌**，或 `gctoac logs clear`
- **自動裁剪：** 每次讀取日誌時，單檔 **> 5 MB** 只保留最後約 512 KB

### 避免 EADDRINUSE

同一 port 只應有一個 runner。若 gctoac 與 PM2 搶 port：

```bash
gctoac stop
gctoac start          # 或：gctoac start --pm2
gctoac doctor         # 會標示 mixed runners
```

---

## 專案結構

```text
src/                  TypeScript 原始碼（app、routes、services、cli）
src/services/queue/   持久化對話佇列（政策、ChatJob、worker、backend 介面）
public/admin/         Admin SPA（OTP 登入 + 各頁）
prisma/               Schema、migrations（含 chat_jobs）、seed
dist/                 編譯後 JS（gitignore；npm run build / prepublishOnly 產生）
scripts/              prepare、install.sh
tests/                Vitest（單元 + 整合）
```

---

## 腳本

```bash
npm run dev          # 開發
npm run build        # prisma generate + tsc
npm start            # node dist/server.js
npm test             # 單元 + 整合測試
npm run db:setup     # migrate + seed
gctoac setup|start|status|stop|doctor|logs|update
```

### 發佈到 npm（維護者）

`prepublishOnly` 會跑 `npm run build`，tarball 一定包含 `dist/`。

```bash
npm login
npm publish --access public --otp=<2FA六位碼>
```

---

## 安全注意

- API key 存 **scrypt** hash（`scrypt$salt$hash`）；舊 **SHA-256** 列在驗證時會自動升級  
- Chat prompt/response、文件與 **佇列 job payload** 以 **AES-256-GCM** 靜態加密  
- 對外 client 請用 **`safe`** mode  
- **Admin SPA：** 只用 OTP（`gctoac admin otp`）→ 短時 session 存 `sessionStorage`（XSS = 在 session 有效期內完全接管）  
- **客戶端 IP：** 只有 **可信代理列表** 內的 TCP peer（預設 `127.0.0.1`）先會採信 `CF-Connecting-IP`／`X-Real-IP`／`XFF`。直連客戶**無法偽造 header** 繞過限流或 ban 他人。遠端 nginx 請把其 IP 加進 Admin → DDoS → 可信代理。  
- Admin 只應開喺本機／VPN  
- 不要 commit `.env`，不要外洩 admin key／OTP  
- 可完全關閉 Admin：`gctoac admin off`（只能用 `gctoac admin on` 重開）  
- 一鍵更新／PM2／改 port 需 admin（視 admin key／OTP session 為 root）

---

## 👤 作者

**Ki (yanshekki)** — 全端工程師、量化交易者，[YSK Limited](https://ysk.hk/) 創辦人。

🌐 [linktr.ee/yanshekki](https://linktr.ee/yanshekki) · 🏢 [ysk.hk](https://ysk.hk/)

### ☕ 支持 / 打賞

如果呢個 Grok → OpenAI Gateway 對你有幫助，歡迎請我飲杯咖啡！

| 網路 | 地址 |
| --- | --- |
| **EVM** (ETH/BSC/AVAX) | `yanshekki.eth` |
| **NEAR** | `yanshekki.near` |
| **ADA** (Cardano) | `$yanshekki` |

---

## 授權

MIT — 見 [LICENSE](./LICENSE)。

## 免責聲明

本 gateway 會 spawn **Grok CLI**，視政策可能使用檔案系統、shell、網路等 tools。認證、暴露範圍、key 模式由你負責。作者不對濫用或資料損失負責。
