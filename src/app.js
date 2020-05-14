const express = require('express')
const routerUser = require('./routes/routerUser')
const app = express()

app.use(express.json())
app.use(routerUser)


module.exports = app