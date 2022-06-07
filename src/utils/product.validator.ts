import Ajv from 'ajv'
import { ProductCol } from '../models/product.model'

const ajv = new Ajv()

const productProperties: ProductCol = {
  name: { type: 'string' },
  category: { type: 'string' },
  price: { type: 'number' },
  qty: { type: 'number' }
}

const productSchema = {
  type: 'object',
  properties: productProperties,
  required: ['name', 'category', 'price', 'qty']
}

const validator = ajv.compile(productSchema)

export default validator
