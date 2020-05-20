const { usuarios } = require('../../app/models/')

class userController{

  async listAllUsers(req, res){
    let nome, email = {}
    const listUser =  await usuarios.findAll()
    console.log("Listando todos usuários");      
    
    return res.status(200).json(listUser)
  }


  async listUsersID(req, res){    
    const user =  await usuarios.findByPk(req.params.id)
    return res.status(200).json(user)
  }

  async createUser(req, res){
    await usuarios.create(req.boby)
  } 
}


module.exports = new userController
