import db from '../config/db.config'

export type OrderCol = {
  id?: number
  user_id?: number
  status: boolean | object
}

export default class Order {
  /**
   * get all Orders
   */
  async index(user_id: number): Promise<OrderCol[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * FROM orders WHERE user_id = ${user_id}`
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
  async selectByUserId(user_id: number, order_id: number): Promise<OrderCol[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT users.id as user_id, orders.id as order_id, products.name as product_name, products.price, cart.qty  FROM  users  JOIN orders ON users.id = orders.user_id JOIN cart ON orders.id = cart.order_id JOIN products ON cart.product_id = products.id  WHERE users.id = ${user_id} AND orders.id = ${order_id};`
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
  async create(order: OrderCol) {
    try {
      const conn = await db.connect()
      let sql = `INSERT INTO orders (status, user_id) VALUES (${order.status}, ${order.user_id})`
      await conn.query(sql)

      sql = `SELECT id from orders ORDER BY id DESC LIMIT 1;`
      const result = await conn.query(sql)

      conn.release()
      return result.rows
    } catch (error) {
      throw new Error(`Connot get orders ${error}`)
    }
  }
}
