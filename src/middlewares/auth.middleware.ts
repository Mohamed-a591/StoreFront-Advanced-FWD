import { NextFunction, Request, Response } from 'express'
import validator from '../utils/auth.validator'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import UserModel from '../models/user.model'

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

export const permission = async (req: Request, res: Response, nxt: NextFunction) => {
  const token = req.header('x-auth-token')
  try {
    const User = new UserModel()
    jwt.verify(String(token), String(process.env.TOKENSECRT))
    const payload: any = jwt.decode(String(token))
    const userInfo = await User.selectOne(payload.userid, undefined)
    if (!userInfo.length) throw Error()
    req.body.jwt_payload = payload
    nxt()
  } catch (error) {
    return res.status(403).json({ massage: 'Invalid Token' })
  }
}
