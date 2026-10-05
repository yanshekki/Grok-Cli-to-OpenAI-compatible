# Changelog

[中文](./CHANGELOG.zh.md)

Newest first. Each version is grouped by category. Empty categories are omitted.

Categories: **New features**, **Improvements**, **Fixes**, **Security**, **Dependency upgrades**, **Internal/CI**.

[README.md](./README.md) and [README-ZH.md](./README-ZH.md) list only the latest three versions. This file is the full history.

Entries come from git history, tags, and [GitHub Releases](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases). A version that appears in `package.json` history but was never published to npm is marked. npm dates are the registry publish time in Hong Kong (UTC+8). Commit subjects are not rewritten into claims the commits do not make.

## [1.7.5] - 2026-10-05

### Improvements

- README links the product page ([ysk.hk/products/gctoac](https://ysk.hk/products/gctoac), English: [ysk.hk/en/products/gctoac](https://ysk.hk/en/products/gctoac)). (`ac63380`)

### Internal/CI

- Publish from a pushed `vX.Y.Z` tag with `.github/workflows/release.yml`. Authentication is npm Trusted Publishing (OIDC) with provenance. The workflow does not use an npm token or a GitHub environment.
- A re-run skips `npm publish` when that version is already on the registry, checks `npm view grok-cli-to-openai-compatible@<version>`, and creates the GitHub Release only when it is missing.
- CI `actions/checkout` and `actions/setup-node` move from v4 to v7. The publish job uses Node 24 so the bundled npm is 11.5.1 or newer.
- Changelogs: the READMEs keep the latest three versions, by category. Older versions live in this file and `CHANGELOG.zh.md`.

## [1.7.4] - 2026-08-14

Tag [`v1.7.4`](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases/tag/v1.7.4). Published to npm.

### Fixes

- `/v1/images/generations` returns the Imagine image when Grok CLI exits 1 after the file was written (`maxTurns` / failed `use_tool` copies). 1.7.3 harvested session `images/` only after a clean stream, so the error was thrown before collect. The gateway recovers this run’s session images and sandbox `output.*`, polls and copies during the stream, and for `n=1` stops the process once a file is in hand. (`caadf98`)

### Internal/CI

- Rebuild `public/admin/boot.js` for the v1.7.3 i18n strings. (`922a5f1`)

## [1.7.3] - 2026-08-14

Tag [`v1.7.3`](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases/tag/v1.7.3). Published to npm.

### Fixes

- `/v1/images/generations` returns the image when Grok Imagine wrote it only under this run’s `~/.grok/sessions/<encoded-cwd>/<uuid>/images/` and the sandbox has no `output.png`. The media-run agent has no bash to copy the file. The gateway copies the newest file for this run into sandbox `output.*`. Collect order stays sandbox-root `output.*`, then the sandbox, then this run’s session `images/`. A 502 `no_image_in_sandbox` happens only when nothing was written. (`e4efd6f`)

### Improvements

- README and README-ZH document the images request, the harvest path, and `/v1/images/*` plus `/v1/media/assets/*`. (`634acfb`)

## [1.7.2] - 2026-08-13

Tag [`v1.7.2`](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases/tag/v1.7.2). Published to npm.

### Fixes

- Generate and edit pass a tools allowlist (`image_gen` / `image_edit`) so the agent cannot `web_fetch` or call `image_edit` first. The collector walks the sandbox, prefers `output.png`, and still returns `refs/*.jpg` when the root file is missing. (`5213dd4`)
- Let `readdir` infer `Dirent` so `tsc` can publish. (`91babc6`)

## [1.7.1] - 2026-08-13

Tag [`v1.7.1`](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases/tag/v1.7.1). Published to npm.

### Fixes

- Admin data tables become labeled cards on narrow screens. Dashboard KPI, safety, and runtime values and shortcut buttons no longer clip. Playground settings collapse so the transcript stays visible and the composer stays at the bottom. (`d23ab46`, `d9d2a06`)
- `gctoac restart` falls back from PM2 when `pm2` is not on `PATH`. (`6c62299`)

### Internal/CI

- Tests refuse a live `POST /admin/api/system/update` when `NODE_ENV=test` or Vitest is running, so `npm install` / `prisma generate` cannot break Vitest workers. Vitest workers are stabilized. (`6c62299`, `be2ad7a`)

## [1.7.0] - 2026-08-13

Tag [`v1.7.0`](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases/tag/v1.7.0). Published to npm.

### New features

- Admin → Support page: GitHub Sponsors, Linktree, crypto addresses, YSK Limited, and `mailto:email@ysk.hk`. Static page, no new API. (`4b49034`)

### Improvements

- Admin and README zh-Hant copy is Hong Kong written Chinese. (`83a1be0`)
- Document Grok 1.0.3 Admin and API surfaces in English and Chinese. (`787bcfb`)

### Fixes

- Replace the DOM `RequestRedirect` type so `tsc` can publish. (`2f1a12d`)

### Security

- Safe mode no longer accepts client `tools`, `allow`, `permission`, `sandbox`, or `agent`. Vision fetch blocks private and metadata hosts and does not follow open redirects. Default agent cwd is `storage/workspaces/default`; the cwd allowlist uses `realpath`. The Grok child environment is a whitelist. The Admin API is rate-limited. OTP is single-use. Git `gctoac update` installs production dependencies unless `GCTOAC_UPDATE_DEV=1`. (`0274353`)
- `resume` is tenant-scoped, the video IDOR fallback is removed, and the Grok cwd is pinned. (`f183ae9`)
- OTP-created rows stay on an admin key. The last admin cannot be revoked. (`babec8b`)
- Ignore a spoofed `CF-Connecting-IP` behind nginx. (`385176c`)

## [1.6.1] - 2026-08-13

Tag [`v1.6.1`](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases/tag/v1.6.1). Published to npm.

### Fixes

- Git-channel `gctoac update` installs devDependencies so the build can compile. `.env` sets `NODE_ENV=production`, which had omitted `@types/*` and Vite. (`017cf6d`)
- Admin → System: Grok inspect cards line up, and the Grok sessions tab always shows the session count. (`f01df63`)

## [1.6.0] - 2026-08-13

Tag [`v1.6.0`](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases/tag/v1.6.0). Published to npm.

### New features

- Align the gateway with Grok Build 1.0.3. Session create is once, then `--resume`. Dropped `--best-of-n` and `--check`. Client `session_id` is mapped per API key. ACP events and cost are parsed. Default model is `grok-4.6`. Inspect, effort, 1–15s video, and URL vision are exposed. (`4c5d2a2`)
- List and delete local Grok Build sessions. (`c67f3a8`)
- Playground: Grok session resume and fork, and tool chips. (`989447a`)
- `reference_to_video` with preset voices. (`73f6daa`)
- Stream Grok `tool_call` and `plan` events on the OpenAI SSE stream. (`ea2de7d`)
- Playground memory, plan, and permission controls. (`d9443f0`)

### Fixes

- `gctoac update` always runs `gctoac migrate`, including when the update errors. (`cf04ae3`)

## [1.5.2] - 2026-07-18

Tag [`v1.5.2`](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases/tag/v1.5.2). Published to npm.

### New features

- Admin list tables sort on the API with `sortBy` / `sortDir`. The default is time descending. Covers chats, API keys, documents, audit logs, media assets and jobs, chat queue jobs, usage, and DDoS live connections, blacklist, and events. The Admin SPA gets clickable column headers. (`4c247ff`)

## [1.5.1] - 2026-07-16

Tag [`v1.5.1`](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases/tag/v1.5.1). Published to npm.

### Fixes

- Queue purge deletes every dead-letter job immediately. Succeeded, failed, and cancelled jobs still purge only when they finished more than 24 hours ago. (`dc74ae2`)
- The Admin purge dialog shows the deleted count and clearer confirm labels, and the click handler stays stable. (`3777612`)

## [1.5.0] - 2026-07-16

Tag [`v1.5.0`](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases/tag/v1.5.0). Published to npm.

### New features

- Durable chat queue: every chat completion is enqueued (`ChatJob` in SQLite, in-process worker with leases, fair round-robin, pause / drain / DLQ). Admin SPA login is a one-time OTP (`gctoac admin otp`). API keys move to scrypt, and legacy SHA-256 rows migrate on verify. (`85f8176`)
- OpenAI-shaped media (`/v1/images`, files, videos, audio), admin media library, hash-routed Admin panel built from `admin/src`, API feature flags, assistants / responses / Anthropic routes, and expanded `gctoac` commands. (`2f6494e`)
- Admin tabbed pages (Queue, Media, System, PM2, DDoS, API Features) with KPI strips. Media studio: generate, edit, and video. Preview lightbox. (`efa9931`)

### Improvements

- Localized API errors and queue offline stream collect when there is no live Response. (`efa9931`)

### Internal/CI

- Restore `.github/workflows/ci.yml` so the README badge resolves. (`385449c`)
- CI uses a valid 32-byte `ENCRYPTION_KEY`. (`e38bab2`)

## [1.4.0] - 2026-07-15

Tag [`v1.4.0`](https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible/releases/tag/v1.4.0). Published to npm. The tag commit only bumps the version from 1.3.1. (`89b3eb7`)

The GitHub Release (published 2026-07-16) highlights durable chat queue, Admin OTP, scrypt keys, DDoS policy, the CSP Admin SPA, and docs/CLI alignment. Those commits are listed under 1.3.1 and 1.5.0, which is where they landed relative to the tags.

### Internal/CI

- Version bump and npm publish of the 1.3.1 tree.

## [1.3.1] - 2026-07-15

Published to npm. No git tag.

### New features

- `gctoac update` shows a live progress UI. (`a27fe72`)
- Admin DDoS center, reverse-proxy client IP, chat history, and CLI ops. Runtime DDoS/abuse policy with auto-ban presets, nginx/Cloudflare client IP, multi-turn conversations, document safety sniffing, PM2 port control, and log clear / auto-trim. (`f9bee14`)

### Improvements

- Minimal centered Admin login with a copy-key command. (`f97bbc2`)

### Fixes

- `gctoac update` auto-migrates the database and always exits. (`e889245`)
- Admin blank page syntax error; update exits after restart. (`54b5965`)
- DDoS scroll, admin auth, pm2 install, and chat playground. (`5d633d0`)
- Free orphan processes on the port during stop/start. (`0b34f4f`)
- `gctoac update` step counter includes pm2. (`7a05d5e`)
- PM2 `EADDRINUSE` crash loop and conflict UX. (`b9392c7`)
- Restore the Admin SPA under CSP (`boot.js` and Google Fonts). (`d4fc0e5`)

### Security

- Harden client-IP trust and load bans at bootstrap. (`54ff3b7`)

### Internal/CI

- Stop tracking `.github` in the repository. (`e279c60`)

## [1.3.0] - 2026-07-14

`package.json` only. Not published to npm as 1.3.0 (the next registry publish is 1.3.1).

### New features

- Admin panel: full-height layout, i18n, chat filters, usage, and models. (`d8a158a`)
- Full i18n, API-key IP whitelist, DDoS center, and PM2 control. (`b0f2cd6`)

### Improvements

- Restyle the Admin panel to match ysk.hk branding. (`c396946`)

### Internal/CI

- npm-only install. Stop tracking `dist` in git. (`cf55a46`)

## [1.2.7] - 2026-07-14

Published to npm. No git tag.

### Fixes

- `gctoac update` exits after it finishes displaying output, without waiting for Ctrl+C. (`8c23d48`)

## [1.2.6] - 2026-07-14

`package.json` only. Not published to npm as 1.2.6.

### New features

- `gctoac key create`, `list`, and `revoke` for admin API keys. (`22a5715`)

## [1.2.5] - 2026-07-14

Published to npm. No git tag.

### Fixes

- Pin `execa@5` so the CommonJS server can start. (`0f8f2bd`)

### Internal/CI

- Ignore the `gctoac.pid` runtime file. (`38461bf`)

## [1.2.4] - 2026-07-14

Published to npm. No git tag.

### Fixes

- `gctoac setup` works without the broken `npx prisma` invocation. (`f9a4c03`)

## [1.2.3] - 2026-07-14

Published to npm. No git tag.

### Fixes

- Stable global install without a Prisma runtime dependency. (`da963a1`)
- `version` and `doctor` do not require `.env`. (`e5fe74a`)
- `install.sh` keeps a permanent `~/.gctoac/src` for `npm link`. (`c42ed4d`)

### Improvements

- Docs recommend `install.sh` or clone-and-link instead of `npm install` from GitHub. (`3cf6c3e`)
- Rewrite the English and Chinese READMEs around npm install, then polish the quick start. (`158a008`, `2182c81`)

## [1.2.2] - 2026-07-14

`package.json` only. Not published to npm as 1.2.2.

### Fixes

- Global GitHub install works without the Prisma CLI. (`a8a85e4`)

## [1.2.1] - 2026-07-14

`package.json` only. Not published to npm as 1.2.1.

### Fixes

- Reliable global install from GitHub (prebuilt `dist` and `prepare`). (`13bf46e`)

## [1.2.0] - 2026-07-14

Published to npm. No git tag. First version on the registry (`1.0.0` and `1.1.0` were not published).

### New features

- `gctoac update` self-update and Admin one-click update. (`86b4e7b`)

### Improvements

- Add `README.md` and `README-ZH.md`. (`87ee7f4`)

### Internal/CI

- Remove an accidental self-dependency from `package-lock.json`. (`f977019`)

## [1.1.0] - 2026-07-14

`package.json` only. Not published to npm.

### New features

- Default port `3847`. npm package bins `gctoac` and `gcoa`. (`b87b702`)

## [1.0.0] - 2026-07-14

`package.json` only. Not published to npm. Includes the first commit (`cc9eae5`).

### New features

- OpenAI-compatible Grok CLI gateway: Express/TypeScript, Prisma/MySQL at this commit, AES-256-GCM, API-key auth, audit logging, documents, PM2, Vitest, and GitHub Actions CI. (`936cd7b`)
- Thinking is exposed as DeepSeek `reasoning_content` plus Grok metadata. (`fd77604`)
- Per-key safe/agent policy and the Admin panel (`/admin` and `/admin/api` for dashboard, chats, keys, documents, audit, and settings). (`0a80d09`)

### Improvements

- Rewrite the README. (`8c237d6`)

### Fixes

- Store the SQLite database under the project-root `data/` directory. (`54258f0`)

### Internal/CI

- Switch the database from MySQL to SQLite. (`cbb4c81`)
- Polish the Admin UI and add Admin API integration tests. (`23782b5`)
