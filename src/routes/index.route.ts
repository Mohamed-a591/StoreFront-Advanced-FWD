import express, { Request, Response } from 'express'

const index = express.Router()

index.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    massage: 'Hello World 💙'
  })
})

export default index
