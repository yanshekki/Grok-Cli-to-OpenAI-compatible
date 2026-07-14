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

**主要能力**

- OpenAI 相容 `POST /v1/chat/completions`（stream / 非 stream）
- Thinking / `reasoning_content`（DeepSeek 風格 + Grok `thought`）
- 每把 key 的 **safe** / **agent** 政策
- AES-256-GCM 加密 + 完整 chat 稽核
- Admin Panel：`/admin`（解密 prompt 輸入輸出、金鑰、一鍵更新）
- 控制 CLI：`gctoac setup | start | stop | status | update`

```text
Client (OpenAI SDK / curl / Open WebUI)
        │  Authorization: Bearer gk_live_...
        ▼
   Express Gateway :3847
   · 認證 · 限流 · safe/agent
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

gctoac doctor   # 檢查 Node / Grok / 環境
gctoac setup    # 建立 ~/.gctoac、.env、資料庫、admin API key
gctoac start    # http://127.0.0.1:3847
gctoac status
```

開啟 Admin（貼上 **admin API key**）：

```text
http://127.0.0.1:3847/admin/
```

若遺失 setup 時的 key，可隨時建立新的：

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

## 安裝方式

### 全域安裝（建議）

```bash
npm install -g grok-cli-to-openai-compatible
```

### 專案依賴

```bash
npm install grok-cli-to-openai-compatible
npx gctoac setup
npx gctoac start --foreground
```

### 由原始碼安裝

```bash
git clone https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible.git
cd Grok-Cli-to-OpenAI-compatible
npm install
npm run build
npm link          # 可選：把 gctoac 掛到 PATH
gctoac setup
gctoac start
```

一鍵腳本（clone 到 `~/.gctoac/src` 再 `npm link`）：

```bash
curl -fsSL https://raw.githubusercontent.com/yanshekki/Grok-Cli-to-OpenAI-compatible/main/scripts/install.sh | bash
```

> 請優先使用 **`npm install -g grok-cli-to-openai-compatible`**。  
> 不建議 `npm install -g github:yanshekki/...`（部分 npm 版本會失敗）。

### 更新

```bash
gctoac update              # 更新套件並重啟
gctoac update --check      # 只檢查是否有新版本
gctoac update --no-restart # 更新但不重啟
```

亦可在 Admin → **系統狀態** → 一鍵更新。

---

## 預設 port

| URL | 用途 |
|-----|------|
| `http://127.0.0.1:3847/v1` | OpenAI 相容 API base |
| `http://127.0.0.1:3847/admin/` | Admin 控制台 |
| `http://127.0.0.1:3847/health` | 健康檢查 |

覆蓋方式：`.env` 設 `PORT=`，或：

```bash
gctoac --port 3847 start
```

---

## CLI（`gctoac` / `gcoa`）

| 指令 | 說明 |
|------|------|
| `gctoac setup` | 建目錄、`.env`、migrate、seed admin key |
| `gctoac start` | 背景啟動 gateway |
| `gctoac start -f` | 前景啟動 |
| `gctoac stop` | 停止背景進程 |
| `gctoac restart` | 重啟 |
| `gctoac status` | 顯示 PID + health |
| `gctoac migrate` | 跑 Prisma migration |
| `gctoac seed` | 產生 admin API key（若未有） |
| `gctoac key` / `gctoac key create` | **建立 API key**（明文只顯示一次） |
| `gctoac key list` | 列出 keys（只有 prefix） |
| `gctoac key revoke <id>` | 撤銷 key |
| `gctoac doctor` | 檢查環境 |
| `gctoac update` | 自我更新後重啟 |
| `gctoac update --check` | 只檢查有無新版本 |
| `gctoac update --no-restart` | 更新但不重啟 |
| `gctoac open` | 印出 API / Admin URL |
| `gctoac version` | 顯示版本 |

```bash
gctoac --home ~/.gctoac-alt setup
gctoac --port 3847 start
```

---

## 功能一覽

| 功能 | 說明 |
|------|------|
| OpenAI API | `POST /v1/chat/completions`（stream / 非 stream）、`GET /v1/models` |
| Thinking | `reasoning_content` + Grok `thought` + `grok.*` |
| 文件 | 加密上傳；可用 `document_ids` 注入 chat |
| Safe / Agent | 每 key 政策；可全域強制 safe |
| 加密 | AES-256-GCM 加密 prompt、response、檔案 |
| Admin Panel | 儀表板、完整解密 chat、keys、文件、audit、設定、一鍵更新 |
| CLI | 生命週期控制 + 自我更新 |
| 運維 | SQLite、PM2、GitHub Actions CI |

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

---

## Safe / Agent 政策

| Mode | 適用 | 行為 |
|------|------|------|
| **`safe`**（client 預設） | 對外應用 | Sandbox cwd、不 always-approve、限制 tools、較短 timeout |
| **`agent`** | 受信 / 內網 | 完整 CLI tools（可 always-approve）；cwd 仍受 allowlist 限制 |

- 全域強制 safe：`GROK_SAFE_MODE=true` 或 Admin → 安全設定  
- Client **無法** 靠 request body 提權  
- **不要** 將 `agent` key 暴露於公網  

---

## Admin Panel

```text
http://127.0.0.1:3847/admin/
```

| 頁面 | 功能 |
|------|------|
| 儀表板 | 統計、最近 chat、併發 |
| Chat 記錄 | **完整解密** prompt / reasoning / response |
| API Keys | 建立、改 mode/role/限流、撤銷 |
| 文件 | 列表、解密預覽、刪除 |
| Audit Logs | 操作紀錄 |
| 安全設定 | 全域 safe、tools、timeout |
| 系統狀態 | 健康、版本、**一鍵更新並重啟** |

Admin API 前綴：`/admin/api/*`（需要 `role=admin`）。

---

## 環境變數

詳見 [`.env.example`](./.env.example)。

| 變數 | 說明 |
|------|------|
| `PORT` | 預設 **`3847`** |
| `DATABASE_URL` | SQLite，例如 `file:../data/gateway.db`（相對 `prisma/`） |
| `ENCRYPTION_KEY` | 32-byte key：`openssl rand -base64 32` |
| `GROK_BIN` | 預設 `grok` |
| `GROK_DEFAULT_MODEL` | 預設模型 |
| `GROK_DEFAULT_CWD` / `GROK_CWD_ALLOWLIST` | Agent cwd 政策 |
| `GROK_ALWAYS_APPROVE` | 只對 agent；safe 一律關閉 |
| `GROK_SAFE_MODE` | 強制全部 key 用 safe |
| `GROK_MAX_CONCURRENT` | 最多並行 Grok 進程 |
| `ADMIN_PANEL_ENABLED` | 開關 `/admin` |
| `CORS_ORIGINS` | 逗號分隔 origins |
| `GCTOAC_HOME` | CLI 資料目錄（預設 `~/.gctoac`） |
| `STORAGE_DIR` | 加密檔案 + sandbox |

**請備份 `ENCRYPTION_KEY`。** 遺失後歷史資料無法解密。

---

## 生產環境（PM2）

```bash
npm run build
pm2 start ecosystem.config.cjs
pm2 logs grok-openai-gateway
```

或直接：`gctoac start`（背景執行，pid 寫入資料目錄）。

---

## 專案結構

```text
src/           TypeScript 原始碼（app、routes、services、cli）
public/admin/  Admin SPA
prisma/        Schema、migrations、seed
dist/          編譯後 JS（隨 npm 發佈）
scripts/       prepare、install.sh
tests/         Vitest
```

---

## 腳本

```bash
npm run dev          # 開發
npm run build        # 編譯 + prisma generate
npm start            # node dist/server.js
npm test             # 單元 + 整合測試
npm run db:setup     # migrate + seed
gctoac setup|start|status|stop|doctor|update
```

### 發佈到 npm（維護者）

```bash
npm login
npm run build
npm publish --access public --otp=<2FA六位碼>
```

---

## 安全注意

- API key 只存 **SHA-256 hash**  
- Chat prompt/response 與文件以 **AES-256-GCM** 靜態加密  
- 對外 client 請用 **`safe`** mode  
- 不要 commit `.env`，不要外洩 admin key  

---

## 授權

MIT — 見 [LICENSE](./LICENSE)。

## 免責聲明

本 gateway 會 spawn **Grok CLI**，視政策可能使用檔案系統、shell、網路等 tools。認證、暴露範圍、key 模式由你負責。作者不對濫用或資料損失負責。
