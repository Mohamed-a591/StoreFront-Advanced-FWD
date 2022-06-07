import express from 'express'
import {
  addProduct,
  deleteProduct,
  getProducts,
  getProductsByCategoryName,
  getProductsById
} from '../controllers/product.controller'
import { ProductMiddleWare } from '../middlewares/product.middleware'

const product = express.Router()

product.get('/', getProducts)
product.get('/get-one', getProductsById)
product.get('/get-by-category', getProductsByCategoryName)
product.post('/add', ProductMiddleWare, addProduct)
product.delete('/delete', deleteProduct)

export default product
