import express from 'express'
import { deleteUser, getUser, getUsers } from '../controllers/user.controller'

const user = express.Router()

user.get('/', getUsers)
user.get('/get-one', getUser)
user.delete('/delete', deleteUser)

export default user
