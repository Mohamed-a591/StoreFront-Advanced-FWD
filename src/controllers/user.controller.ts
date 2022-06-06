import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import UserModel, { UserCol } from '../models/user.model'
import { handelResponse } from '../modules/response.module'

export const getUsers = async (_req: Request, res: Response) => {
  const User = new UserModel()
  const users = await User.index()
  res.json(handelResponse(users.length ? users : 'not found 🤷‍♂️', 'No users exist'))
}

export const getUser = async (req: Request, res: Response) => {
  const User = new UserModel()
  const user = await User.selectOne(req.body.user_id)
  res.json(handelResponse(user.length ? user : 'not found 🤷‍♂️', 'User not exist'))
}

export const deleteUser = async (req: Request, res: Response) => {
  const User = new UserModel()
  const { user_id } = req.body
  const user: object[] = await User.selectOne(user_id)
  if (user.length) {
    await User.deleteUser(user_id)
    res.json(handelResponse({ ...user[0] }, 'User deleted successfuly 👌'))
  } else {
    res.json(handelResponse('not found 🤷‍♂️', 'User not found'))
  }
}
