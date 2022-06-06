import express from 'express'
import { addOrder, getOrders } from '../controllers/order.controller'

const order = express.Router()

order.get('/', getOrders)
order.get('/add', addOrder)

export default order
