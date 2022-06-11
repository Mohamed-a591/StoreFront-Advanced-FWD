import db from '../config/db.config'

export type CartCol = {
  order_id: number
  product_id: number
  qty: number
}

export default class Cart {
  async insert(cart: CartCol) {
    try {
      const conn = await db.connect()
      const sql = `INSERT INTO cart(order_id, product_id, qty) VALUES(${cart.order_id}, ${cart.product_id}, ${cart.qty})`
      const result = await conn.query(sql)
      conn.release()
      return true
    } catch (error) {
      throw Error(`Insert cart row ${error}`)
    }
  }
}
