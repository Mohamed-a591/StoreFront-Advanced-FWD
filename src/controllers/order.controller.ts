import { Request, Response } from 'express'
import OrderModel, { OrderCol } from '../models/order.model'
import { handelResponse } from '../modules/response.module'

const Order = new OrderModel()

export const getOrders = async (_req: Request, res: Response) => {
  const orders = await Order.index()
  res.json(handelResponse(orders.length ? orders : 'No orders found 🤷‍♂️'))
}

export const getOrdersByUserId = async (req: Request, res: Response) => {
  const user_id: number = req.body.jwt_payload.userid
  if (!user_id) return res.json(handelResponse([], 'user not valid'))
  const orders = await Order.selectByUserId(user_id)
  res.json(handelResponse(orders.length ? orders : 'No orders found 🤷‍♂️'))
}

export const addOrder = async (req: Request, res: Response) => {
  const orderData: OrderCol = {
    user_id: req.body.jwt_payload.userid,
    products_id: req.body.products_id,
    status: req.body.status
  }

  await Order.create(orderData)
  if (!req.body.valid) return res.json(handelResponse([], 'invalide response', 400))
  res.json(handelResponse(orderData, 'Product added successfuly', 200))
}
