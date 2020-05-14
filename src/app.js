const express = require('express')
const routerUser = require('./routes/routerUser')
const app = express()

app.use(express.json())
app.use(routerUser)

app.get('/', (req, res) =>{
  res.send("Bem vindo ao back-end Pizzaria!!")
})

module.exports = app