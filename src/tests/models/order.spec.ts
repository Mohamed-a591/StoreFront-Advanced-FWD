import db from '../../config/db.config'
import OrderModel, { OrderCol } from '../../models/order.model'
import UserModel, { UserCol } from '../../models/user.model'

const Order = new OrderModel()
const User = new UserModel()

describe('Order Model', () => {
  describe('Test method define', () => {
    it('Expect methods [index, create, selectByUserId] to be defined', () => {
      expect(Order.index).toBeDefined()
      expect(Order.create).toBeDefined()
      expect(Order.selectByUserId).toBeDefined()
    })
  })

  describe('Order functionalty', () => {
    const userInfo: UserCol = {
      first_name: 'Mohamed',
      last_name: 'Abdel-Samie',
      email: 'order@gmail.com',
      phone: '01111346560',
      password: 'mo123'
    }

    const orderInfo: OrderCol = {
      id: 1,
      status: false
    }

    beforeAll(async () => {
      await User.insertUser(userInfo)
      const result = await User.selectOne(undefined, String(userInfo.email))
      orderInfo.user_id = result[0].id
    })

    it('Create order', async () => {
      const result = await Order.create(orderInfo)
      expect(result).toBeTruthy()
    })

    it('Select order by user id', async () => {
      const result = await Order.selectByUserId(Number(orderInfo.user_id), Number(orderInfo.id))
      expect(result).toBeTruthy()
    })
  })
})
