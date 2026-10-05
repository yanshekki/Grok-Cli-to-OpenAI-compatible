# Contributing

## Changelog

This rule applies to every release.

1. Add the version to `CHANGELOG.md` and `CHANGELOG.zh.md`, newest first.
2. Group that version by category. Omit a category when it has no changes.
   - English: New features, Improvements, Fixes, Security, Dependency upgrades, Internal/CI
   - 香港書面繁體中文（`CHANGELOG.zh.md` 與 `README-ZH.md`）：新功能、改進、修正、安全、依賴升級、內部／CI
3. `README.md` and `README-ZH.md` show only the latest three versions, in the same categories, and end with a link to the full changelog (`CHANGELOG.md` / `CHANGELOG.zh.md`).
4. When a fourth version would appear in a README, move the oldest of those three into the full changelog files only.
5. Write entries from the changes, git history, tags, and GitHub Releases. Do not invent items. `CHANGELOG.zh.md` and the Chinese README are Hong Kong written Chinese, not spoken Cantonese.

## Release

Publishing uses npm Trusted Publishing (OIDC) only. Do not add `NPM_TOKEN`, `NODE_AUTH_TOKEN`, or any other npm token.

The trusted publisher on npmjs.com is already:

| Field | Value |
| --- | --- |
| Provider | GitHub Actions |
| Owner | `yanshekki` |
| Repository | `Grok-Cli-to-OpenAI-compatible` |
| Workflow filename | `release.yml` |
| Environment | blank |

The workflow file must stay `.github/workflows/release.yml` and must not set a GitHub environment. Those strings are part of the OIDC identity npm checks.

1. Bump `package.json` and `package-lock.json` to the release version. Update the admin version fixtures that mirror it (`tests/admin/helpers/fixtures/system.get.json` and `tests/admin/unit/l1/page-api.parsers.test.ts`).
2. Update both changelogs and both READMEs using the rule above.
3. Merge to `main` with CI green. Do not tag from a feature branch.
4. On the merged commit, push an annotated tag whose name is `v` plus the `package.json` version, for example `v1.7.5`.
5. `.github/workflows/release.yml` runs the test suite, publishes with `npm publish --access public --provenance` over OIDC, checks `npm view grok-cli-to-openai-compatible@<version>` (including the provenance attestation), and creates one GitHub Release whose notes are that version’s section in `CHANGELOG.md`.
6. Re-running the workflow is safe. If that version is already on npm, publish is skipped. If the GitHub Release already exists, it is left as-is.

`prepublishOnly` still runs `npm run build`, so the tarball includes `dist/`. Provenance is also set in `publishConfig`. The publish job needs Node 24 (bundled npm 11.5.1+) and `id-token: write`.
