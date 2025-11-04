#!/bin/bash
set -e

cd ~/app/landing
git pull

cd ./docker
bash stop.sh

npm ci

cd ../landing
bash start.sh
