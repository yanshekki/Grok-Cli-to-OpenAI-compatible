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
- **Admin Panel** — 儀表板、對話、金鑰、文件、稽核、用量、**DDoS 中心**、PM2、系統更新
- **DDoS／防濫用** — 可配置限流、多規則自動封鎖、反向代理真實客戶端 IP（nginx / Cloudflare）
- 控制 CLI：setup、start/stop/restart、status、doctor、logs、update、keys、admin on/off

```text
Client (OpenAI SDK / curl / Open WebUI)
        │  Authorization: Bearer gk_live_...
        ▼
   Express Gateway :3847
   · 認證 · 限流 · safe/agent
   · 代理感知 Client IP · 自動封鎖
   · 加密稽核 · Admin /admin
   · gctoac start | stop | status | update
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

開啟 Admin（貼上 **admin API key**）：

```text
http://127.0.0.1:3847/admin/
```

若遺失 setup 時的 key：

```bash
gctoac key create    # 明文只顯示一次
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
| Admin Panel | 儀表板、對話、金鑰、文件、稽核、用量、DDoS、PM2、系統 |
| DDoS 中心 | 即時連線、黑名單、自動封鎖、可配置策略與預設檔 |
| 反向代理 | 信任層數 + CF / nginx / X-Forwarded-For 真實 IP |
| CLI | 生命週期、preferred runner、日誌、自我更新 |
| 運維 | SQLite、PM2、日誌自動裁剪（>5 MB）、GitHub Actions CI |

---

## API

受保護路由需要：

```http
Authorization: Bearer gk_live_...
```

### Chat（stream）

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

### 端點

| Method | Path | 說明 |
|--------|------|------|
| GET | `/health` | 存活 |
| GET | `/ready` | DB + Grok 檢查 |
| GET | `/v1/models` | 模型列表 |
| POST | `/v1/chat/completions` | 對話 |
| POST | `/v1/documents` | 上傳（欄位 `file`） |
| GET/DELETE | `/v1/documents`… | 列表 / 軟刪除 |
| POST/GET/DELETE | `/v1/api-keys`… | Admin 管理 key |
| * | `/admin/api/*` | Admin JSON API（需 `role=admin`） |

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

| 頁面 | 功能 |
|------|------|
| **儀表板** | 24h KPI、成功率、防護摘要、模型用量、運行狀態（port／加密） |
| **對話** | 多輪 playground、歷史、上下文模式、附件 |
| **對話記錄** | 搜尋／篩選／分頁；**完整解密** prompt／reasoning／response |
| **API 金鑰** | 建立／編輯 mode／role／限流／IP 白名單；撤銷 |
| **文件** | 搜尋／篩選／分頁；預覽、下載、刪除；DB 與檔案系統儲存 |
| **稽核日誌** | 搜尋／篩選／分頁；可讀動作標籤 |
| **用量與防護** | 24h 統計、按模型／按金鑰分 tab、限流摘要 |
| **DDoS 中心** | 即時連線、黑名單、自動封鎖事件、**可配置防護策略**（寬鬆／均衡／嚴格／自訂）、反向代理 IP |
| **安全設定** | 全域 safe、tools、timeout |
| **PM2** | Runner 切換（gctoac ↔ PM2）、**監聽連接埠**（預設 3847）、設定、**清除日誌** + 自動裁剪 |
| **系統狀態** | 健康、軟體檢查、一鍵更新並重啟 |

Admin API 前綴：`/admin/api/*`（需要 `role=admin`）。

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
| `DATABASE_URL` | SQLite，例如 `file:../data/gateway.db`（相對 `prisma/`） |
| `ENCRYPTION_KEY` | 32-byte key：`openssl rand -base64 32` |
| `GROK_BIN` | 預設 `grok` |
| `GROK_DEFAULT_MODEL` | 預設模型 |
| `GROK_DEFAULT_CWD` / `GROK_CWD_ALLOWLIST` | Agent cwd 政策 |
| `GROK_ALWAYS_APPROVE` | 只對 agent；safe 一律關閉 |
| `GROK_SAFE_MODE` | 強制全部 key 用 safe |
| `GROK_MAX_CONCURRENT` | 最多並行 Grok 進程 |
| `ADMIN_PANEL_ENABLED` | 硬關 `/admin`（env，需重啟）。運行時：`gctoac admin on\|off` |
| `PM2_ADMIN_ENABLED` | 允許 Admin 控制 PM2 |
| `CORS_ORIGINS` | 逗號分隔 origins（改 `PORT` 時請一併更新） |
| `RATE_LIMIT_*` / `CHAT_BURST_MAX` / `BLOCK_*` | 限流／自動認證初始值（DDoS 策略儲存後會覆寫） |
| `TRUST_PROXY` | 代理層數：`0`／`1`／`2`…（`true`→1，`false`→0） |
| `PROXY_IP_SOURCE` | `auto` \| `cloudflare` \| `nginx` \| `x-forwarded-for` \| `socket` |
| `GCTOAC_HOME` | CLI 資料目錄（預設 `~/.gctoac`） |
| `STORAGE_DIR` | 加密大檔 + sandbox |
| `UPLOAD_MAX_BYTES` / `DOCUMENT_DB_MAX_BYTES` | 上傳上限／DB 與檔案系統分界 |

**請備份 `ENCRYPTION_KEY`。** 遺失後歷史資料無法解密。

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
src/           TypeScript 原始碼（app、routes、services、cli）
public/admin/  Admin SPA
prisma/        Schema、migrations、seed
dist/          編譯後 JS（gitignore；npm run build / prepublishOnly 產生）
scripts/       prepare、install.sh
tests/         Vitest
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

- API key 只存 **SHA-256 hash**  
- Chat prompt/response 與文件以 **AES-256-GCM** 靜態加密  
- 對外 client 請用 **`safe`** mode  
- **客戶端 IP：** 只有 **可信代理列表** 內的 TCP peer（預設 `127.0.0.1`）先會採信 `CF-Connecting-IP`／`X-Real-IP`／`XFF`。直連客戶**無法偽造 header** 繞過限流或 ban 他人。遠端 nginx 請把其 IP 加進 Admin → DDoS → 可信代理。  
- Admin 只應開喺本機／VPN；admin key 存 `sessionStorage`（XSS = 完全接管）  
- 不要 commit `.env`，不要外洩 admin key  
- 可完全關閉 Admin：`gctoac admin off`（只能用 `gctoac admin on` 重開）  
- 一鍵更新／PM2／改 port 需 admin（視 admin key 為 root）

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
