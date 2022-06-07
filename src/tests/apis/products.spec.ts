import supertest from 'supertest'
import app from '../../index'
import ProductModel, { ProductCol } from '../../models/product.model'
import UserModel, { UserCol } from '../../models/user.model'

// create a request object
const request = supertest(app)
const Product = new ProductModel()
const User = new UserModel()

describe('Products Endpoints:', async () => {
  let token = ''
  const userData: UserCol = {
    first_name: 'Mohamed',
    last_name: 'Abdel-Samie',
    email: 'createProduct@gmail.com',
    phone: '0111111111',
    password: 'storefront1234'
  }

  beforeAll(async () => {
    await request.post('/api/register').send(userData)

    const result = await User.selectOne(undefined, String(userData.email))
    userData.id = result[0].id

    const response = await request.post('/api/login').send(userData)
    token = response.header['x-auth-token']
  })

  describe('Product apis', () => {
    const productInfo: ProductCol = {
      name: 'New product 2022',
      category: 'Category name',
      price: 9000,
      qty: 1000
    }

    it('Cheeck authintication', async () => {
      const response = await request.get('/api/products/').send(productInfo)
      expect(response.status).toEqual(403)
    })

    it('Create product', async () => {
      const response = await request
        .post('/api/products/add')
        .set({ 'x-auth-token': token })
        .send(productInfo)

      expect(response.status).toEqual(200)
    })

    it('Get products by category', async () => {
      const response = await request
        .get('/api/orders/get-user-orders')
        .set({ 'x-auth-token': token })

      expect(response.status).toEqual(200)
    })

    it('Get all products', async () => {
      const response = await request.get('/api/products').set({ 'x-auth-token': token })
      productInfo.id = response.body.data[0].id

      expect(response.status).toEqual(200)
    })

    it('Delete products', async () => {
      const response = await request
        .delete('/api/products/delete')
        .set({ 'x-auth-token': token })
        .send({ product_id: productInfo.id })

      expect(response.status).toEqual(200)
    })

    it('Expext bad request "product not exist" Delete products', async () => {
      const response = await request
        .delete('/api/products/delete')
        .set({ 'x-auth-token': token })
        .send({ product_id: 6565 })

      expect(response.status).toEqual(400)
    })
  })
})
