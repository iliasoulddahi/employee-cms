if(process.env.NODE_ENV !== "production"){
    require('dotenv').config()
  }
const express = require('express')
const app = express()
const router = require('./routes')
const cors = require('cors')
const errorMiddleware = require('./middlewares/error.middleware')
const port = process.env.PORT || 3000

app.use(cors()) // enable cors access
app.use(express.urlencoded({ extended: true })) // enable body parser
app.use(express.json()) 
app.use(router)
app.use(errorMiddleware)

app.listen(port, ()=> console.log(`Listening To Port ${port}`));
module.exports = app;
