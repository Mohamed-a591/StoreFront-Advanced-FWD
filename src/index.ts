import express, { Application } from 'express'
import morgan from 'morgan'
import bodyparser from 'body-parser'
import * as dotenv from 'dotenv'
import userRouter from './routes/user.route'
import productRouter from './routes/product.route'
import orderRouter from './routes/order.route'
import indexRouter from './routes/index1.route'
import authRouter from './routes/auth.route'

dotenv.config()

const PORT = process.env.PORT || 3000
// create an instance server
const app: Application = express()
// HTTP request logger middleware
app.use(morgan('short'))

app.use(bodyparser.json())

// Use routes
app.use('/', indexRouter)
app.use('/api', authRouter)
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`)
})

export default app
