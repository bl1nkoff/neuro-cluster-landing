#!/bin/bash
set -e

# === Проверяем аргументы ===
#NEED_TO_BUILD=false
NEED_TO_DEPLOY_CREDENTIALS=false

for arg in "$@"; do
#  if [[ "$arg" == "--build" || "$arg" == "-b" ]]; then
#    NEED_TO_BUILD=true
#  fi

  if [[ "$arg" == "--credentials" || "$arg" == "-c" ]]; then
    NEED_TO_DEPLOY_CREDENTIALS=true
  fi
done


# === Билд ===
npm run build
rsync -av --delete ./.output/ root@62.217.182.224:/root/landing/.output

npm run generate
rsync -av --delete ./.output/public/ root@62.217.182.224:/var/www/landing


# === Деплой кред ===
if [ "$NEED_TO_DEPLOY_CREDENTIALS" = true ]; then
  echo "========================="
  echo ""
  echo "> Начинаем деплой кред"
  echo ""
  echo "========================="

  rsync -av .env.credentials root@62.217.182.224:~/landing
fi
