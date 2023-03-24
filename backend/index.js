const express = require('express')
const app = express()
const router = require('./routes')
const cors = require('cors')
const errorMiddleware = require('./middlewares/error.middleware')
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)
// app.get('/', (req,res)=> res.send('Active'))
app.use(errorMiddleware)

app.listen(port, ()=> console.log(`Listening To Port ${port}`))