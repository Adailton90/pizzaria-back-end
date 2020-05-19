const express = require('express')
const router = express()
const userController = require('../controller/userController')


router.get('/users', userController.listAllUsers)
router.get('/users/:id',(req, res) =>{
  res.json({list: 'users'})
})
router.post('/users', userController.createUser)

router.put('/users/:id',(req, res) =>{
  res.json({list: 'users'})
})
router.delete('/users',(req, res) =>{
  res.json({list: 'users'})
})

module.exports = router