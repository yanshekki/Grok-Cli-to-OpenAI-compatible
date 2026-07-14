#!/usr/bin/env bash
# Reliable global installer.
# Does NOT use `npm install -g github:…` (broken on some npm versions).
# Clones into a permanent directory and npm-links gctoac/gcoa onto PATH.
set -euo pipefail

REPO_URL="${REPO_URL:-https://github.com/yanshekki/Grok-Cli-to-OpenAI-compatible.git}"
REF="${REF:-main}"
# Keep source permanently so npm link targets stay valid
INSTALL_DIR="${GCTOAC_INSTALL_DIR:-${HOME}/.gctoac/src}"

echo "[gctoac] Install dir: $INSTALL_DIR"
echo "[gctoac] Cloning $REPO_URL ($REF)…"

mkdir -p "$(dirname "$INSTALL_DIR")"
rm -rf "$INSTALL_DIR"
git clone --depth 1 --branch "$REF" "$REPO_URL" "$INSTALL_DIR"
cd "$INSTALL_DIR"

echo "[gctoac] Installing dependencies…"
npm install --no-fund --no-audit

echo "[gctoac] Building…"
npm run build

echo "[gctoac] Linking globally (gctoac / gcoa)…"
# Ensure global bin dir is used
npm link

BIN_DIR="$(npm config get prefix)/bin"
echo ""
echo "[gctoac] Done."
echo "[gctoac] Source: $INSTALL_DIR"
echo "[gctoac] Bins:   $BIN_DIR/gctoac , $BIN_DIR/gcoa"
echo ""

if ! command -v gctoac >/dev/null 2>&1; then
  echo "[gctoac] NOTE: $BIN_DIR is not on your PATH."
  echo "         Add this to ~/.bashrc or ~/.zshrc:"
  echo "           export PATH=\"$BIN_DIR:\$PATH\""
  echo ""
  # still try running via absolute path
  if [[ -x "$BIN_DIR/gctoac" ]]; then
    "$BIN_DIR/gctoac" version || true
  fi
else
  gctoac version || true
fi

echo "Next:"
echo "  gctoac doctor"
echo "  gctoac setup"
echo "  gctoac start"
