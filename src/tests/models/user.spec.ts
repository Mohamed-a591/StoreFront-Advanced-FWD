import db from '../../config/db.config'
import UserModel, { UserCol } from '../../models/user.model'

const User = new UserModel()

describe('User Model', () => {
  describe('Test method define', () => {
    it('Expect methods [index, insertUser, selectOne, deleteUser] to be defined', () => {
      expect(User.index).toBeDefined()
      expect(User.insertUser).toBeDefined()
      expect(User.selectOne).toBeDefined()
      expect(User.deleteUser).toBeDefined()
    })
  })

  describe('Auth functionalty', () => {
    const userInfo: UserCol = {
      first_name: 'Mohamed',
      last_name: 'Abdel-Samie',
      email: 'mohamed.abdelsamie3009@gmail.com',
      phone: '01111346560',
      password: 'mo123'
    }

    beforeAll(async () => {
      await User.insertUser(userInfo)
    })

    it('Expect return the same user data by email', async () => {
      const selectUser = await User.selectOne(undefined, String(userInfo.email))
      expect(selectUser[0].first_name).toEqual(userInfo.first_name)
      expect(selectUser[0].last_name).toEqual(userInfo.last_name)
      expect(selectUser[0].email).toEqual(userInfo.email)
      expect(selectUser[0].phone).toEqual(userInfo.phone)
      userInfo.id = selectUser[0].id
    })

    afterAll(async () => {
      const conn = await db.connect()
      let sql = `DELETE FROM orders WHERE user_id=${userInfo.id}`
      await conn.query(sql)
      sql = `DELETE FROM users WHERE id=${userInfo.id}`
      await conn.query(sql)
      conn.release()
    })
  })
})
