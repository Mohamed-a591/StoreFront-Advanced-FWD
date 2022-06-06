import Ajv from 'ajv'

const ajv = new Ajv()

const userProperties = {
  email: { type: 'string' },
  password: { type: 'string' }
}

const userSchema = {
  type: 'object',
  properties: userProperties,
  required: ['email', 'password']
}

const validator = ajv.compile(userSchema)

export default validator
