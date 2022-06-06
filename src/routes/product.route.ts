import express from 'express'
import { addProduct, getProducts } from '../controllers/product.controller'

const product = express.Router()

product.get('/', getProducts)
product.get('/add', addProduct)

export default product
