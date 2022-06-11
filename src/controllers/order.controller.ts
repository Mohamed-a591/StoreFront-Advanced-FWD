import { Request, Response } from 'express'
import CartModel, { CartCol } from '../models/cart.model'
import OrderModel, { OrderCol } from '../models/order.model'
import { handelResponse } from '../modules/response.module'

const Order = new OrderModel()
const Cart = new CartModel()

export const getOrders = async (req: Request, res: Response) => {
  // return res.json(req.body.jwt_payload.userid)
  const orders = await Order.index(Number(req.body.jwt_payload.userid))
  res.json(handelResponse(orders.length ? orders : 'No orders found 🤷‍♂️'))
}

export const getOrdersByUserId = async (req: Request, res: Response) => {
  const user_id: number = req.body.jwt_payload.userid
  if (!user_id) return res.json(handelResponse([], 'user not valid'))
  const orders = await Order.selectByUserId(user_id, req.body.order_id)
  res.json(handelResponse(orders.length ? orders : 'No orders found 🤷‍♂️'))
}

export const addOrder = async (req: Request, res: Response) => {
  const orderData: OrderCol = {
    user_id: req.body.jwt_payload.userid,
    status: req.body.status
  }
  const products = req.body.products

  try {
    const order_id = await Order.create(orderData)

    for (let i = 0; i < products.length; i++) {
      const row: CartCol = {
        order_id: Number(order_id[0].id),
        product_id: products[i].id,
        qty: products[i].qty
      }
      const cart = await Cart.insert(row)
    }
    // if (!req.body.valid) return res.json(handelResponse([], 'invalide response', 400))
    res.json(handelResponse(orderData, 'Product added successfuly', 200))
  } catch (error) {
    throw Error(`Add order erro: ${error}`)
  }
}
