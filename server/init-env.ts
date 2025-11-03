import dotenv from 'dotenv'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

function initEnv () {
  // Определяем путь к корню проекта
  // const __filename = fileURLToPath(import.meta.url)
  // const __dirname = dirname(__filename)
  const rootDir = process.cwd()

  // Загружаем основной .env
  dotenv.config({path: join(rootDir, '.env')})

  // Загружаем .env.credentials (переменные из него перезапишут дубли из .env)
  dotenv.config({path: join(rootDir, '.env.credentials'), override: true})
}

export {
  initEnv,
}
