import { Request, Response } from 'express'

export const getProducts = (req: Request, res: Response) => {
  res.send('getProducts')
}

export const addProduct = (req: Request, res: Response) => {
  res.send('addProduct')
}
