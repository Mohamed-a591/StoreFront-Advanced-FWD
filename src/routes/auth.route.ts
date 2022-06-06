import express from 'express'
import { loginUser, registerUser } from '../controllers/auth.controller'
import { UserMiddleWare } from '../middlewares/user.middleware'
import { AuthMiddleWare } from '../middlewares/auth.middleware'

const auth = express.Router()

auth.post('/register', UserMiddleWare, registerUser)
auth.post('/login', AuthMiddleWare, loginUser)

export default auth
