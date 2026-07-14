#!/usr/bin/env bash
# Reliable global installer (avoids broken `npm install -g github:…` on some npm versions)
set -euo pipefail

REPO_URL="${REPO_URL:-https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible.git}"
REF="${REF:-main}"
TMP="${TMPDIR:-/tmp}/gctoac-install-$$"

cleanup() { rm -rf "$TMP"; }
trap cleanup EXIT

echo "[gctoac] Cloning $REPO_URL ($REF)…"
git clone --depth 1 --branch "$REF" "$REPO_URL" "$TMP"
cd "$TMP"

echo "[gctoac] Installing dependencies…"
npm install --no-fund --no-audit

echo "[gctoac] Building…"
npm run build

echo "[gctoac] Linking globally (gctoac / gcoa)…"
npm link

echo ""
echo "[gctoac] Done."
gctoac version || true
echo "Next:"
echo "  gctoac doctor"
echo "  gctoac setup"
echo "  gctoac start"
