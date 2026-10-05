# 更新日誌

[English](./CHANGELOG.md)

由新到舊。每個版本按類別分組。沒有變更的類別略去。

類別：**新功能**、**改進**、**修正**、**安全**、**依賴升級**、**內部／CI**。

[README.md](./README.md) 與 [README-ZH.md](./README-ZH.md) 只列最近三個版本。本檔是完整記錄。

條目來自 git 歷史、標籤，以及 [GitHub Releases](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases)。`package.json` 有過、但未曾發佈到 npm 的版本會註明。npm 日期是登錄庫發佈時間（香港時間，UTC+8）。沒有把 commit 說明改寫成 commit 本身沒有的說法。

## [1.7.5] - 2026-10-05

### 改進

- README 加上產品頁連結（[ysk.hk/products/gctoac](https://ysk.hk/products/gctoac)，英文：[ysk.hk/en/products/gctoac](https://ysk.hk/en/products/gctoac)）。（`ac63380`）

### 內部／CI

- 推送 `vX.Y.Z` 標籤後，由 `.github/workflows/release.yml` 發佈。認證只用 npm 受信任發佈（OIDC），並附來源證明（provenance）。工作流程不使用 npm token，也不使用 GitHub environment。
- 重新執行時，若該版本已在登錄庫，就跳過 `npm publish`，再執行 `npm view grok-cli-to-openai-compatible@<version>`；GitHub Release 只在尚未建立時才建立。
- CI 的 `actions/checkout` 與 `actions/setup-node` 由 v4 改為 v7。發佈 job 使用 Node 24，以便內建 npm 為 11.5.1 或更新。
- 更新日誌：兩份 README 只保留最近三個版本，並按類別分組。較舊版本在本檔與 `CHANGELOG.md`。

## [1.7.4] - 2026-08-14

標籤 [`v1.7.4`](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases/tag/v1.7.4)。已發佈到 npm。

### 修正

- Grok CLI 在檔案寫好之後以 exit `1` 結束時（`maxTurns`／失敗的 `use_tool` 複製），`/v1/images/generations` 仍交回 Imagine 圖片。1.7.3 只在串流正常結束後才收 session `images/`，錯誤會在收集之前拋出。Gateway 會取回今次 run 的 session 圖片與沙箱 `output.*`，串流期間輪詢並複製；`n=1` 一拿到檔案就停止行程。（`caadf98`）

### 內部／CI

- 為 v1.7.3 的 i18n 字串重新建置 `public/admin/boot.js`。（`922a5f1`）

## [1.7.3] - 2026-08-14

標籤 [`v1.7.3`](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases/tag/v1.7.3)。已發佈到 npm。

### 修正

- Grok Imagine 只把圖寫到今次 run 的 `~/.grok/sessions/<encoded-cwd>/<uuid>/images/`、沙箱沒有 `output.png` 時，`/v1/images/generations` 仍交回圖片。media-run 的 agent 沒有 bash，不能自己複製。Gateway 把今次 run 最新一張複製到沙箱 `output.*`。收圖順序仍是沙箱根目錄 `output.*`、沙箱、今次 session 的 `images/`。只有完全沒有檔案時才回 502 `no_image_in_sandbox`。（`e4efd6f`）

### 改進

- README 與 README-ZH 寫明圖片請求、收圖路徑，以及 `/v1/images/*` 與 `/v1/media/assets/*`。（`634acfb`）

## [1.7.2] - 2026-08-13

標籤 [`v1.7.2`](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases/tag/v1.7.2)。已發佈到 npm。

### 修正

- 生成與編輯傳入工具允許清單（`image_gen`／`image_edit`），避免 agent 先 `web_fetch` 或先呼叫 `image_edit`。收集器會走遍沙箱，優先 `output.png`；根目錄沒有檔案時仍交回 `refs/*.jpg`。（`5213dd4`）
- `readdir` 改為推斷 `Dirent`，`tsc` 才可以發佈。（`91babc6`）

## [1.7.1] - 2026-08-13

標籤 [`v1.7.1`](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases/tag/v1.7.1)。已發佈到 npm。

### 修正

- 窄螢幕上 Admin 資料表改為帶標籤的卡片。Dashboard 的 KPI、安全與運行數值，以及捷徑按鈕不再被裁切。Playground 設定收成一行，對話紀錄保持可見，輸入列留在底部。（`d23ab46`、`d9d2a06`）
- `pm2` 不在 `PATH` 時，`gctoac restart` 由 PM2 退回 gctoac。（`6c62299`）

### 內部／CI

- `NODE_ENV=test` 或正在跑 Vitest 時，測試拒絕真正的 `POST /admin/api/system/update`，避免 `npm install`／`prisma generate` 弄壞 Vitest worker。同時穩定 Vitest worker。（`6c62299`、`be2ad7a`）

## [1.7.0] - 2026-08-13

標籤 [`v1.7.0`](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases/tag/v1.7.0)。已發佈到 npm。

### 新功能

- Admin → 支持頁：GitHub Sponsors、Linktree、加密貨幣地址、YSK Limited，以及 `mailto:email@ysk.hk`。靜態頁，沒有新 API。（`4b49034`）

### 改進

- Admin 與 README 的繁體中文改為香港書面語。（`83a1be0`）
- 以中英文記錄 Grok 1.0.3 的 Admin 與 API 介面。（`787bcfb`）

### 修正

- 替換 DOM `RequestRedirect` 型別，`tsc` 才可以發佈。（`2f1a12d`）

### 安全

- Safe mode 不再接受客戶端的 `tools`、`allow`、`permission`、`sandbox` 或 `agent`。遠端圖片擷取封鎖私有位址與 metadata 主機，並且不跟隨開放重新導向。預設 agent 工作目錄是 `storage/workspaces/default`；允許清單用 `realpath`。Grok 子行程環境變數是白名單。Admin API 有速率限制。OTP 只用一次。除非 `GCTOAC_UPDATE_DEV=1`，git 頻道的 `gctoac update` 安裝生產依賴。（`0274353`）
- `resume` 按租戶隔離，移除影片 IDOR 後備路徑，並釘死 Grok 工作目錄。（`f183ae9`）
- OTP 建立的列留在 admin 金鑰上。最後一個 admin 不能撤銷。（`babec8b`）
- 在 nginx 後面忽略偽造的 `CF-Connecting-IP`。（`385176c`）

## [1.6.1] - 2026-08-13

標籤 [`v1.6.1`](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases/tag/v1.6.1)。已發佈到 npm。

### 修正

- git 頻道的 `gctoac update` 會安裝 devDependencies，建置才編譯得到。`.env` 設了 `NODE_ENV=production`，之前因此漏了 `@types/*` 與 Vite。（`017cf6d`）
- Admin → 系統：Grok inspect 卡片對齊，Grok sessions 分頁一律顯示工作階段數量。（`f01df63`）

## [1.6.0] - 2026-08-13

標籤 [`v1.6.0`](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases/tag/v1.6.0)。已發佈到 npm。

### 新功能

- 對齊 Grok Build 1.0.3。工作階段只建立一次，其後用 `--resume`。移除 `--best-of-n` 與 `--check`。客戶端 `session_id` 按 API 金鑰對應。解析 ACP 事件與費用。預設模型是 `grok-4.6`。提供 inspect、effort、1–15 秒影片，以及 URL 視覺。（`4c5d2a2`）
- 列出並刪除本機 Grok Build 工作階段。（`c67f3a8`）
- Playground：Grok 工作階段 resume／fork，以及工具 chips。（`989447a`）
- `reference_to_video` 支援預設聲線。（`73f6daa`）
- 在 OpenAI SSE 串流上送出 Grok `tool_call` 與 `plan` 事件。（`ea2de7d`）
- Playground 的記憶、計劃與權限控制。（`d9443f0`）

### 修正

- `gctoac update` 即使更新出錯，也會執行 `gctoac migrate`。（`cf04ae3`）

## [1.5.2] - 2026-07-18

標籤 [`v1.5.2`](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases/tag/v1.5.2)。已發佈到 npm。

### 新功能

- Admin 列表在 API 端以 `sortBy`／`sortDir` 排序，預設時間由新到舊。涵蓋對話、API 金鑰、文件、稽核日誌、媒體資產與工作、對話佇列、用量，以及 DDoS 即時連線、黑名單與事件。Admin SPA 的欄位標題可點擊排序。（`4c247ff`）

## [1.5.1] - 2026-07-16

標籤 [`v1.5.1`](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases/tag/v1.5.1)。已發佈到 npm。

### 修正

- 佇列清除會立即刪除全部 dead-letter 工作。成功、失敗、已取消的工作仍只在完成超過 24 小時後才清除。（`dc74ae2`）
- Admin 清除對話框顯示刪除數量與更清楚的確認文字，點擊處理保持穩定。（`3777612`）

## [1.5.0] - 2026-07-16

標籤 [`v1.5.0`](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases/tag/v1.5.0)。已發佈到 npm。

### 新功能

- 持久化對話佇列：每次 chat completion 都入隊（SQLite `ChatJob`、行程內 worker，含租約、公平輪替、暫停／排空／DLQ）。Admin SPA 以一次性 OTP 登入（`gctoac admin otp`）。API 金鑰改為 scrypt，舊的 SHA-256 列在驗證時遷移。（`85f8176`）
- OpenAI 形狀的媒體（`/v1/images`、files、videos、audio）、Admin 媒體庫、由 `admin/src` 建置的 hash 路由 Admin 面板、API 功能開關、assistants／responses／Anthropic 路由，以及擴充的 `gctoac` 指令。（`2f6494e`）
- Admin 分頁（佇列、媒體、系統、PM2、DDoS、API 功能）與 KPI 列。媒體工作室：生成、編輯、影片。預覽燈箱。（`efa9931`）

### 改進

- API 錯誤本地化；沒有即時 Response 時，佇列離線收集串流。（`efa9931`）

### 內部／CI

- 恢復 `.github/workflows/ci.yml`，README 徽章才連得到。（`385449c`）
- CI 使用合法的 32-byte `ENCRYPTION_KEY`。（`e38bab2`）

## [1.4.0] - 2026-07-15

標籤 [`v1.4.0`](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases/tag/v1.4.0)。已發佈到 npm。標籤 commit 只把版本從 1.3.1 提升。（`89b3eb7`）

GitHub Release（2026-07-16 發佈）提到持久化對話佇列、Admin OTP、scrypt 金鑰、DDoS 策略、CSP 下的 Admin SPA，以及文件／CLI 對齊。這些 commit 相對標籤落在 1.3.1 與 1.5.0，記錄在該兩節。

### 內部／CI

- 版本號提升，並把 1.3.1 的樹發佈到 npm。

## [1.3.1] - 2026-07-15

已發佈到 npm。沒有 git 標籤。

### 新功能

- `gctoac update` 顯示即時進度。（`a27fe72`）
- Admin DDoS 中心、反向代理客戶端 IP、對話紀錄與 CLI 維運。運行時 DDoS／濫用策略與自動封鎖預設、nginx／Cloudflare 客戶端 IP、多輪對話、文件安全檢查、PM2 port 控制，以及日誌清除／自動裁剪。（`f9bee14`）

### 改進

- 簡潔置中的 Admin 登入，並可複製金鑰指令。（`f97bbc2`）

### 修正

- `gctoac update` 自動遷移資料庫，並且一定會結束行程。（`e889245`）
- Admin 空白頁語法錯誤；更新在重啟後結束。（`54b5965`）
- DDoS 捲動、admin 認證、pm2 安裝，以及 chat playground。（`5d633d0`）
- stop／start 時釋放佔用 port 的孤兒行程。（`0b34f4f`）
- `gctoac update` 的步驟計數包含 pm2。（`7a05d5e`）
- PM2 `EADDRINUSE` 崩潰迴圈與衝突提示。（`b9392c7`）
- 在 CSP 下恢復 Admin SPA（`boot.js` 與 Google Fonts）。（`d4fc0e5`）

### 安全

- 收緊客戶端 IP 信任，並在啟動時載入封鎖名單。（`54ff3b7`）

### 內部／CI

- 倉庫不再追蹤 `.github`。（`e279c60`）

## [1.3.0] - 2026-07-14

只在 `package.json`。未曾以 1.3.0 發佈到 npm（登錄庫下一版是 1.3.1）。

### 新功能

- Admin 面板：全高版面、i18n、對話篩選、用量與模型。（`d8a158a`）
- 完整 i18n、API 金鑰 IP 白名單、DDoS 中心與 PM2 控制。（`b0f2cd6`）

### 改進

- Admin 面板改成 ysk.hk 的視覺。（`c396946`）

### 內部／CI

- 只經 npm 安裝。git 不再追蹤 `dist`。（`cf55a46`）

## [1.2.7] - 2026-07-14

已發佈到 npm。沒有 git 標籤。

### 修正

- `gctoac update` 顯示完即結束，不用再按 Ctrl+C。（`8c23d48`）

## [1.2.6] - 2026-07-14

只在 `package.json`。未曾以 1.2.6 發佈到 npm。

### 新功能

- `gctoac key create`、`list`、`revoke`，用來管理 admin API 金鑰。（`22a5715`）

## [1.2.5] - 2026-07-14

已發佈到 npm。沒有 git 標籤。

### 修正

- 釘選 `execa@5`，CommonJS 伺服器才啟動得到。（`0f8f2bd`）

### 內部／CI

- 忽略運行時檔案 `gctoac.pid`。（`38461bf`）

## [1.2.4] - 2026-07-14

已發佈到 npm。沒有 git 標籤。

### 修正

- `gctoac setup` 不再依賴會失敗的 `npx prisma`。（`f9a4c03`）

## [1.2.3] - 2026-07-14

已發佈到 npm。沒有 git 標籤。

### 修正

- 穩定的全域安裝，不再依賴 Prisma runtime。（`da963a1`）
- `version` 與 `doctor` 不需要 `.env`。（`e5fe74a`）
- `install.sh` 保留永久的 `~/.gctoac/src` 供 `npm link`。（`c42ed4d`）

### 改進

- 文件改為建議 `install.sh` 或 clone 後 link，而不是從 GitHub `npm install`。（`3cf6c3e`）
- 重寫中英文 README，以 npm 安裝為主，並整理快速開始。（`158a008`、`2182c81`）

## [1.2.2] - 2026-07-14

只在 `package.json`。未曾以 1.2.2 發佈到 npm。

### 修正

- 從 GitHub 做全域安裝時不需要 Prisma CLI。（`a8a85e4`）

## [1.2.1] - 2026-07-14

只在 `package.json`。未曾以 1.2.1 發佈到 npm。

### 修正

- 從 GitHub 做可靠的全域安裝（預先建置的 `dist` 與 `prepare`）。（`13bf46e`）

## [1.2.0] - 2026-07-14

已發佈到 npm。沒有 git 標籤。登錄庫上的第一個版本（`1.0.0` 與 `1.1.0` 沒有發佈）。

### 新功能

- `gctoac update` 自我更新，以及 Admin 一鍵更新。（`86b4e7b`）

### 改進

- 加入 `README.md` 與 `README-ZH.md`。（`87ee7f4`）

### 內部／CI

- 從 `package-lock.json` 移除意外的自我依賴。（`f977019`）

## [1.1.0] - 2026-07-14

只在 `package.json`。未曾發佈到 npm。

### 新功能

- 預設 port `3847`。npm 套件的 bin 為 `gctoac` 與 `gcoa`。（`b87b702`）

## [1.0.0] - 2026-07-14

只在 `package.json`。未曾發佈到 npm。包含第一次 commit（`cc9eae5`）。

### 新功能

- OpenAI 相容的 Grok CLI gateway：Express／TypeScript、此 commit 時的 Prisma／MySQL、AES-256-GCM、API 金鑰認證、稽核日誌、文件、PM2、Vitest，以及 GitHub Actions CI。（`936cd7b`）
- Thinking 以 DeepSeek `reasoning_content` 加上 Grok metadata 露出。（`fd77604`）
- 按金鑰的 safe／agent 政策，以及 Admin 面板（`/admin` 與 `/admin/api`：儀表板、對話、金鑰、文件、稽核、設定）。（`0a80d09`）

### 改進

- 重寫 README。（`8c237d6`）

### 修正

- SQLite 資料庫改放在專案根目錄的 `data/`。（`54258f0`）

### 內部／CI

- 資料庫由 MySQL 改為 SQLite。（`cbb4c81`）
- 整理 Admin UI，並加入 Admin API 整合測試。（`23782b5`）
