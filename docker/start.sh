#!/usr/bin/env bash

# === Проверяем аргументы ===
ATTACHED_MODE=false

for arg in "$@"; do
  if [[ "$arg" == "--attached" ]]; then
    ATTACHED_MODE=true
  fi
done

# === Настройки проекта ===
source "$(dirname "$0")/compose.conf"

# === Собираем команду ===
CMD=(
  docker compose
  --project-name "${PROJECT_NAME}"
  --project-directory "${PROJECT_DIRECTORY}"
  up
  --remove-orphans
)

# Добавляем флаги
if [ "$ATTACHED_MODE" = false ]; then
  CMD+=(--detach)
fi

# === Запуск ===
"${CMD[@]}"
