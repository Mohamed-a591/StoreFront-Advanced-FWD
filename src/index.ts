import express, { Application } from 'express'
import morgan from 'morgan'
import bodyparser from 'body-parser'
import * as dotenv from 'dotenv'
import userRouter from './routes/user.route'
import productRouter from './routes/product.route'
import orderRouter from './routes/order.route'
import indexRouter from './routes/index.route'
import authRouter from './routes/auth.route'
import { permission } from './middlewares/auth.middleware'

dotenv.config()

const PORT = process.env.PORT || 3000
// create an instance server
const app: Application = express()
// HTTP request logger middleware
app.use(morgan('dev'))
// app.use(morgan('short'))

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

// Use routes
app.use('/', indexRouter)
app.use('/api', authRouter)

app.use(permission)
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)

// start express server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

export default app
