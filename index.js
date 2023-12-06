const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
require('dotenv').config()
const cors = require('cors')
const port = 3001
//connect to postgresql pake config
const sequelize = require('./src/config/db-config')
//pake middleware
//const authenticationMiddleware = require('./src/middleware/auth-middleware')
//app.use(authenticationMiddleware)

//tesprogram

//membuat tabel destination


// Membuat table di database jika tidak ada
// sequelize.sync({ alter: true }) // tambah force: true untuk menghapus table yang sudah ada

const app = express()

app.use(cors())
app.use(express.json())

//asdf
const generalRoute = require('./src/route/genroute')
app.use('/', generalRoute)

app.listen(port, async() => {
  try{
    await sequelize.authenticate()
    console.log('berhasil terkoneksi database')
  } catch (e) {
    console.error('gagal terkoneksi', e)
  }
  console.log(`Server jalan di port ${port} coy`)
})