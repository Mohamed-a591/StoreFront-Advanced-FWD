import { NextFunction, Request, Response } from 'express'
import validator from '../utils/auth.validator'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const AuthMiddleWare = (req: Request, res: Response, nxt: NextFunction) => {
  const valid = validator(req.body)
  if (valid) {
    req.body.valid = 1
    nxt()
  } else {
    res.status(400).json(validator.errors)
  }
}

export const permission = (req: Request, res: Response, nxt: NextFunction) => {
  const token = req.header('x-auth-token')
  try {
    const decodePayload = jwt.verify(String(token), String(process.env.TOKENSECRT))
    const payload = jwt.decode(String(token))
    req.body.jwt_payload = payload
    nxt()
  } catch (error) {
    return res.status(403).json({ massage: 'Invalid Token' })
  }
}
