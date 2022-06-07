import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'
import UserModel, { UserCol } from '../models/user.model'
import { handelResponse } from '../modules/response.module'

dotenv.config()

export const registerUser = async (req: Request, res: Response) => {
  const User = new UserModel()
  const user: UserCol = req.body

  const checkUser = await User.selectOne(undefined, req.body.email)

  if (checkUser.length) return res.status(400).json({ massage: 'exist before' })

  await User.insertUser(user)
  const userData = await User.selectOne(undefined, String(user.email))

  const responseData = {
    id: user.id,
    full_name: `${user.first_name} ${user.last_name}`,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone: user.phone
  }
  const token = jwt.sign({ userid: userData[0].id }, String(process.env.TOKENSECRT))
  res.header('x-auth-token', token)

  res.json(handelResponse({ ...responseData }, 'User add successfuly 👌'))
}

export const loginUser = async (req: Request, res: Response) => {
  const User = new UserModel()
  const user: UserCol = req.body

  const checkUser = await User.selectOne(undefined, req.body.email)
  if (!checkUser.length) return res.status(400).json({ massage: 'Invalid email or password' })

  const checkedUser = checkUser[0]
  const validPass = bcrypt.compareSync(String(user.password), String(checkedUser.password))
  if (!validPass) return res.status(400).json({ massage: 'Invalid email or password' })

  const token = jwt.sign({ userid: checkedUser.id }, String(process.env.TOKENSECRT))
  res.header('x-auth-token', token)

  const responseData = {
    id: checkedUser.id,
    full_name: `${checkedUser.first_name} ${checkedUser.last_name}`,
    email: checkedUser.email,
    phone: checkedUser.phone
  }
  res.status(200).json(handelResponse({ ...responseData }, 'Logged-in successfuly 👌'))
}
