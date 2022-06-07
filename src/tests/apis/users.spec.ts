import supertest from 'supertest'
import app from '../../index'
import UserModel, { UserCol } from '../../models/user.model'

// create a request object
const request = supertest(app)
const User = new UserModel()

describe('User Endpoints:', async () => {
  let token = ''
  const userData: UserCol = {
    first_name: 'Mohamed',
    last_name: 'Abdel-Samie',
    email: 'login@gmail.com',
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

  it('Get all user', async () => {
    const response = await request.get('/api/users').set({ 'x-auth-token': token })
    expect(response.status).toEqual(200)
  })

  it('Get user by id:', async () => {
    const userId = { user_id: Number(userData.id) }
    const response = await request
      .get('/api/users/get-one')
      .set({ 'x-auth-token': token })
      .send(userId)

    expect(response.status).toEqual(200)
  })
})
