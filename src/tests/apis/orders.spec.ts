import supertest from 'supertest'
import app from '../../index'
import { OrderCol } from '../../models/order.model'
import UserModel, { UserCol } from '../../models/user.model'

// create a request object
const request = supertest(app)
const User = new UserModel()

describe('Orders Endpoints:', async () => {
  let token = ''
  const userData: UserCol = {
    first_name: 'Mohamed',
    last_name: 'Abdel-Samie',
    email: 'createOrder@gmail.com',
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

  describe('Order apis', () => {
    const orderInfo: OrderCol = {
      products_id: [1, 2, 3],
      status: false,
      user_id: userData.id
    }

    it('Cheeck authintication', async () => {
      const response = await request.get('/api/orders/').send(orderInfo)
      expect(response.status).toEqual(403)
    })

    it('Create order', async () => {
      const response = await request
        .post('/api/orders/add')
        .set({ 'x-auth-token': token })
        .send(orderInfo)

      expect(response.status).toEqual(200)
    })

    it('Get order by user id', async () => {
      const response = await request
        .get('/api/orders/get-user-orders')
        .set({ 'x-auth-token': token })

      expect(response.status).toEqual(200)
    })
  })
})
