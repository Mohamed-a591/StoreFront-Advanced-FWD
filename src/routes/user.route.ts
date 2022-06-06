import express from 'express'
import { deleteUser, getUser, getUsers } from '../controllers/user.controller'
import { permission } from '../middlewares/auth.middleware'

const user = express.Router()

user.get('/', getUsers)
user.get('/get-one', getUser)
user.delete('/delete', permission, deleteUser)

export default user
