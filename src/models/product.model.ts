import db from '../config/db.config'

export type ProductCol = {
  id?: number
  name: string | object
  category: string | object
  price: number | object
  qty: number | object
}

export default class Product {
  /**
   * get all products
   */
  async index(): Promise<ProductCol[]> {
    try {
      const conn = await db.connect()
      const sql = 'SELECT * FROM products'
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (error) {
      throw new Error(`Connot get products ${error}`)
    }
  }

  async selectById(id: number): Promise<ProductCol[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * FROM products WHERE id=${id}`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (error) {
      throw new Error(`Connot get products ${error}`)
    }
  }

  async selectByCategoryName(cat_name: string): Promise<ProductCol[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * FROM products WHERE category='${cat_name}'`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (error) {
      throw new Error(`Connot get products ${error}`)
    }
  }

  async create(product: ProductCol): Promise<boolean> {
    try {
      const conn = await db.connect()
      const sql = `INSERT INTO products (name, category, price, qty) 
                VALUES ('${product.name}', '${product.category}', ${product.price}, ${product.qty})`
      const result = await conn.query(sql)
      conn.release()
      return result ? true : false
    } catch (error) {
      throw new Error(`Connot get products ${error}`)
    }
  }

  async delete(product_id: number): Promise<boolean> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM products WHERE id=${product_id}`
      const result = await conn.query(sql)
      conn.release()
      return result ? true : false
    } catch (error) {
      throw new Error(`Connot get products ${error}`)
    }
  }
}
