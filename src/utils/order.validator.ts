import Ajv from 'ajv'
import { OrderCol } from '../models/order.model'

const ajv = new Ajv()

const orderProperties: OrderCol = {
  products_id: { type: 'array' },
  status: { type: 'boolean' }
}

const orderSchema = {
  type: 'object',
  properties: orderProperties,
  required: ['products_id', 'status']
}

const validator = ajv.compile(orderSchema)

export default validator
