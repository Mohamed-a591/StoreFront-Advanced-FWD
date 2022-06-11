import Ajv from 'ajv'
import { OrderCol } from '../models/order.model'

const ajv = new Ajv()

const orderProperties: OrderCol = {
  status: { type: 'boolean' }
}

const orderSchema = {
  type: 'object',
  properties: orderProperties,
  required: ['status', 'products']
}

const validator = ajv.compile(orderSchema)

export default validator
