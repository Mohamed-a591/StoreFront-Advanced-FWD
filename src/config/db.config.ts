import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

const { NODE_ENV, DB_HOST, DB_NAME, DB_TEST_NAME, DB_USERNAME, DB_PASSWORD } = process.env

const db = new Pool({
  host: DB_HOST,
  database: NODE_ENV == 'dev' ? DB_NAME : DB_TEST_NAME,
  user: DB_USERNAME,
  password: DB_PASSWORD
})

export default db
