import { NextFunction, Request, Response } from 'express'
import validator from '../utils/user.validator'

export const UserMiddleWare = (req: Request, res: Response, nxt: NextFunction) => {
  const valid = validator(req.body)
  if (valid) {
    req.body.valid = 1
    nxt()
  } else {
    res.status(403).json(validator.errors)
  }
}
