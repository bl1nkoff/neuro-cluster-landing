#!/bin/bash
set -e

# === Проверяем аргументы ===
#NEED_TO_BUILD=false
DEPLOY_GUI=false
DEPLOY_SERVER=false
NEED_TO_DEPLOY_CREDENTIALS=false

for arg in "$@"; do
#  if [[ "$arg" == "--build" || "$arg" == "-b" ]]; then
#    NEED_TO_BUILD=true
#  fi

  if [[ "$arg" == "--gui" || "$arg" == "-g" ]]; then
    DEPLOY_GUI=true
  fi

  if [[ "$arg" == "--server" || "$arg" == "-s" ]]; then
    DEPLOY_SERVER=true
  fi

  if [[ "$arg" == "--credentials" || "$arg" == "-c" ]]; then
    NEED_TO_DEPLOY_CREDENTIALS=true
  fi
done


# === Билд & Деплой приложений ===

if [ "$DEPLOY_GUI" = true ]; then
  npm run generate
  rsync -av --delete ./.output/public/ root@62.217.182.224:/var/www/landing
fi

if [ "$DEPLOY_SERVER" = true ]; then
  npm run build
  rsync -av --delete ./.output/ root@62.217.182.224:/root/landing/.output
fi


# === Деплой кред ===
if [ "$NEED_TO_DEPLOY_CREDENTIALS" = true ]; then
  echo "========================="
  echo ""
  echo "> Начинаем деплой кред"
  echo ""
  echo "========================="

  rsync -av .env.credentials root@62.217.182.224:~/landing
fi
