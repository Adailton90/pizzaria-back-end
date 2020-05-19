const { usuarios } = require('../../app/models')

class userController{

  async listAllUsers(req, res){
    const usersList =  await usuarios.listAllUsers
    res.json(usersList)
  }
  async createUser(req, res){
    await usuarios.create(req.boby)
  } 
}


module.exports = new userController
