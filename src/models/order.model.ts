import db from '../config/db.config'

export type OrderCol = {
  id?: number
  user_id?: number
  products_id: number[] | object
  status: boolean | object
}

export default class Order {
  /**
   * get all Orders
   */
  async index(): Promise<OrderCol[]> {
    try {
      const conn = await db.connect()
      const sql = 'SELECT * FROM orders'
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (error) {
      throw new Error(`Connot get orders ${error}`)
    }
  }

  /**
   * selectByUserId
   * @param user_id
   * @returns
   */
  async selectByUserId(user_id: number): Promise<OrderCol[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * FROM orders WHERE user_id=${user_id}`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (error) {
      throw new Error(`Connot get orders ${error}`)
    }
  }

  /**
   * create
   * @param order
   */
  async create(order: OrderCol): Promise<boolean> {
    try {
      const conn = await db.connect()
      const sql = `INSERT INTO orders (products_id, status, user_id) VALUES ('{${order.products_id}}' , ${order.status}, ${order.user_id})`
      const result = await conn.query(sql)
      conn.release()
      return result ? true : false
    } catch (error) {
      throw new Error(`Connot get orders ${error}`)
    }
  }
}
