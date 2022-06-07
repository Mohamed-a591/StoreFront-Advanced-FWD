import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import validator from '../utils/order.validator'

export const OrderMiddleWare = (req: Request, res: Response, nxt: NextFunction) => {
  const token = req.header('x-auth-token')
  try {
    /**
     * Get user id from token
     */
    // const decodePayload = jwt.decode(String(token))
    // req.body.jwt_payload = decodePayload

    /**
     * Validate req data
     */
    const valid = validator(req.body)
    if (valid) {
      req.body.valid = 1
    } else {
      return res.status(400).json(validator.errors)
    }
    nxt()
  } catch (error) {
    return res.status(403).json({ massage: 'Invalid order data' })
  }
}
