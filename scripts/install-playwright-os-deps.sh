#!/usr/bin/env bash
# Playwright Chromium needs NSS/NSPR and graphics libs. Vercel build images use Amazon Linux 2023 (dnf).
set -euo pipefail

if ! command -v dnf >/dev/null 2>&1; then
  echo "dnf not found — skipping Playwright OS dependency install"
  exit 0
fi

echo "Installing Playwright system libraries (Amazon Linux / Vercel)..."
dnf install -y \
  nss \
  nspr \
  atk \
  at-spi2-atk \
  at-spi2-core \
  cups-libs \
  libdrm \
  libXcomposite \
  libXdamage \
  libXrandr \
  libgbm \
  libxkbcommon \
  alsa-lib \
  pango \
  gtk3 \
  libXext \
  libXi \
  libXtst \
  libXScrnSaver \
  libXcursor
