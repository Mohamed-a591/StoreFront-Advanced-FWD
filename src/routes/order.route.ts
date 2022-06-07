import express from 'express'
import { addOrder, getOrders, getOrdersByUserId } from '../controllers/order.controller'
import { OrderMiddleWare } from '../middlewares/order.middleware'

const order = express.Router()

order.get('/', getOrders)
order.get('/get-user-orders', getOrdersByUserId)
order.post('/add', OrderMiddleWare, addOrder)

export default order
