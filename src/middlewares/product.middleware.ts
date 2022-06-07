import { NextFunction, Request, Response } from 'express'
import validator from '../utils/product.validator'

export const ProductMiddleWare = (req: Request, res: Response, nxt: NextFunction) => {
  const valid = validator(req.body)
  if (valid) {
    req.body.valid = 1
    nxt()
  } else {
    res.status(400).json(validator.errors)
  }
}
