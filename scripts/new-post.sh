#!/usr/bin/env bash
set -euo pipefail

SLUG="${1:-}"

if [ -z "$SLUG" ]; then
  echo "Uso: task post:new -- <slug-do-post>"
  echo "Exemplo: task post:new -- introducao-ao-go"
  exit 1
fi

# Diretório de destino
POSTS_DIR="astro/src/content/posts"
mkdir -p "$POSTS_DIR"

TARGET="${POSTS_DIR}/${SLUG}.md"
if [ -f "$TARGET" ]; then
  echo "Erro: o post '$TARGET' já existe!"
  exit 1
fi

RAW_TITLE=$(echo "$SLUG" | tr '-' ' ')
FIRST_CHAR=$(echo "${RAW_TITLE:0:1}" | tr '[:lower:]' '[:upper:]')
REST="${RAW_TITLE:1}"
TITLE="${FIRST_CHAR}${REST}"
NOW=$(date '+%Y-%m-%d %H:%M:%S %z')

cat <<EOF > "$TARGET"
---
title: "$TITLE"
date: $NOW
tags:
  - geral
published: false
---

Escreva aqui o conteúdo do seu novo post...
EOF

echo "Post criado com sucesso em: $TARGET"
