const express = require('express')
const router = express()
const userController = require('../controller/userController')


router.get('/users', userController.listAllUsers)
router.get('/users/:id',userController.listUsersID)
router.post('/user', userController.createUser)

router.put('/users/:id',userController.updateUser)
router.delete('/user/:id',userController.deleteUser)
router.post('/user/login',userController.loginUser)

module.exports = router