import Ajv from 'ajv'
import { UserCol } from '../models/user.model'

const ajv = new Ajv()

const userProperties: UserCol = {
  first_name: { type: 'string' },
  last_name: { type: 'string' },
  email: { type: 'string' },
  phone: { type: 'string' },
  password: { type: 'string' }
}

const userSchema = {
  type: 'object',
  properties: userProperties,
  required: ['first_name', 'last_name', 'email', 'phone', 'password']
}

const validator = ajv.compile(userSchema)

export default validator
