import { Request, Response } from 'express'
import ProductModel, { ProductCol } from '../models/product.model'
import { handelResponse } from '../modules/response.module'

const Product = new ProductModel()

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const products = await Product.index()
    res.json(handelResponse(products.length ? products : 'No products found 🤷‍♂️'))
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export const getProductsById = async (req: Request, res: Response) => {
  try {
    const productId: number = req.body.product_id
    if (!productId) return res.json(handelResponse([], 'product_id required'))
    const products = await Product.selectById(productId)
    res.json(handelResponse(products.length ? products[0] : 'No products found 🤷‍♂️'))
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export const getProductsByCategoryName = async (req: Request, res: Response) => {
  try {
    const productCategoryName: string = req.body.category_name
    if (!productCategoryName) return res.json(handelResponse([], 'category_name required'))
    const products = await Product.selectByCategoryName(productCategoryName)
    res.json(handelResponse(products.length ? products : 'No products found 🤷‍♂️'))
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export const addProduct = async (req: Request, res: Response) => {
  try {
    const productData: ProductCol = req.body
    await Product.create(productData)
    if (!req.body.valid) return res.json(handelResponse([], 'invalide response', 400))
    res.json(handelResponse(productData, 'Product added successfuly', 200))
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId: number = req.body.product_id
    if (!productId) return res.status(400).json(handelResponse([], 'product_id required', 400))
    const productDetails = await Product.selectById(productId)
    if (productDetails.length) {
      await Product.delete(productId)
      return res.json(handelResponse(productDetails, 'Product deleted successfuly', 200))
    } else {
      return res.status(400).json(handelResponse([], 'Product not found', 400))
    }
  } catch (error) {
    throw new Error(`${error}`)
  }
}
