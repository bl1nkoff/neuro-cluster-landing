#!/bin/bash

# === Проверяем аргументы ===
NEED_TO_BUILD=false
NEED_TO_DEPLOY_CREDENTIALS=false

for arg in "$@"; do
  if [[ "$arg" == "--build" || "$arg" == "-b" ]]; then
    NEED_TO_BUILD=true
  fi

  if [[ "$arg" == "--credentials" || "$arg" == "-c" ]]; then
    NEED_TO_DEPLOY_CREDENTIALS=true
  fi
done

if [ "$NEED_TO_BUILD" = true ]; then
  echo "Building the app..."

  npm run generate || { echo "Build failed!"; exit 1; }
fi

echo "Deploy the build..."
rsync -av --delete ./dist/ root@62.217.182.224:/var/www/landing/

if [ "$NEED_TO_DEPLOY_CREDENTIALS" = true ]; then
  echo "Deploy credentials..."

  rsync -av .env.credentials root@62.217.182.224:~/landing
fi
