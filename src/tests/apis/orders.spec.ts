import supertest from 'supertest'
import app from '../../index'
import OrderModel, { OrderCol } from '../../models/order.model'
import ProductModel, { ProductCol } from '../../models/product.model'
import UserModel, { UserCol } from '../../models/user.model'

// create a request object
const request = supertest(app)
const User = new UserModel()
const Product = new ProductModel()
const Order = new OrderModel()

describe('Orders Endpoints:', async () => {
  let token = ''
  const userData: UserCol = {
    first_name: 'Mohamed',
    last_name: 'Abdel-Samie',
    email: 'createOrder@gmail.com',
    phone: '0111111111',
    password: 'storefront1234'
  }

  const product: ProductCol = {
    name: 'Product name',
    category: 'Cat name',
    price: 3000,
    qty: 20
  }

  const orderInfo: OrderCol = {
    id: 0,
    status: false
  }

  const productsInfo = {
    products: [
      {
        id: 0,
        qty: 10
      }
    ],
    status: true
  }

  beforeAll(async () => {
    try {
      await request.post('/api/register').send(userData)

      const result = await User.selectOne(undefined, String(userData.email))
      userData.id = result[0].id
      orderInfo.user_id = result[0].id

      const response = await request.post('/api/login').send(userData)
      token = response.header['x-auth-token']

      await Product.create(product)
      const allProducts = await Product.index()
      product.id = allProducts[allProducts.length - 1].id
      productsInfo.products[0].id = Number(product.id)
    } catch (error) {
      throw new Error('Error throw setup function')
    }
  })

  describe('Order apis', () => {
    it('Cheeck authintication', async () => {
      const response = await request.get('/api/orders/').send(orderInfo)
      expect(response.status).toEqual(403)
    })

    it('Create order', async () => {
      const response = await request
        .post('/api/orders/add')
        .set({ 'x-auth-token': token })
        .send(productsInfo)

      const createOrder = await Order.index(Number(userData.id))
      orderInfo.id = createOrder[0].id

      expect(response.status).toEqual(200)
    })

    it('Get order by user id', async () => {
      const order_id = orderInfo.id
      const response = await request
        .get('/api/orders/get-user-orders')
        .set({ 'x-auth-token': token })
        .send({ order_id })

      expect(response.status).toEqual(200)
    })
  })
})
