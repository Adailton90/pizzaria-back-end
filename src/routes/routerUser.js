const express = require('express')
const router = express()


router.get('/users', (req, res) =>{
  res.json({list: 'users'})
})
module.exports = router