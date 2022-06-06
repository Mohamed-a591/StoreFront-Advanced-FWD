import { Request, Response } from 'express'

export const getOrders = (req: Request, res: Response) => {
  res.send('getOrders')
}

export const addOrder = (req: Request, res: Response) => {
  res.send('addOrder')
}
