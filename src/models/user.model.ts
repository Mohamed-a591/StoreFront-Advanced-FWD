import db from '../config/db.config'

export type UserCol = {
  id?: number
  first_name: string | object
  last_name: string | object
  email: string | object
  phone: string | object
  password?: string | object
}

export default class User {
  /**
   * get all users
   */
  async index(): Promise<UserCol[]> {
    try {
      const conn = await db.connect()
      const sql = 'SELECT * FROM users'
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (error) {
      throw new Error(`Connot get users ${error}`)
    }
  }

  async selectOne(user_id?: number, email?: string): Promise<UserCol[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * FROM users WHERE id=${user_id ? user_id : null} OR email = '${
        email ? email : null
      }';`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (error) {
      throw new Error(`Connot get userssssss ${error}`)
    }
  }

  /**
   * insert user
   * @returns
   */
  async insertUser(user: UserCol): Promise<UserCol[]> {
    try {
      const conn = await db.connect()
      const sql = `INSERT INTO users (first_name, last_name, email, phone, password) 
      VALUES ('${user.first_name}', '${user.last_name}', '${user.email}', '${user.phone}', '${user.password}')`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (error) {
      throw new Error(`Connot insert user ${error}`)
    }
  }

  /**
   *
   * @param user
   * @returns
   */
  async updatetUser(user: UserCol): Promise<UserCol[]> {
    try {
      const conn = await db.connect()
      const sql = `INSERT INTO users (first_name, last_name, email, phone, password) 
      VALUES ('${user.first_name}', '${user.last_name}', '${user.email}', '${user.phone}', '${user.password}')`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (error) {
      throw new Error(`Connot update users: ${error}`)
    }
  }

  /**
   *
   * @param user_id
   * @returns
   */
  async deleteUser(user_id: number): Promise<UserCol[]> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM users WHERE id = '${user_id}'`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (error) {
      throw new Error(`Connot delete user ${error}`)
    }
  }
}
