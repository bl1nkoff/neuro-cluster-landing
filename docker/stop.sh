#!/usr/bin/env bash

# === Настройки проекта ===
source "$(dirname "$0")/compose.conf"

docker compose \
  --project-name "${PROJECT_NAME}" \
  --project-directory "${PROJECT_DIRECTORY}" \
  down
