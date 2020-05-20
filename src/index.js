const express = require('express')
const routes = require('./routes/routes')
const app = express()

app.use(express.json())
app.use(routes)

app.get('/', (req, res) =>{
  res.send("Bem vindo ao back-end Pizzaria!!")
})

app.listen(3000)
console.log('Servidor executando na porta 3000');
