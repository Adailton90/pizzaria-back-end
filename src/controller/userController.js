const { usuarios } = require('../../app/models/')

class userController{

  async listAllUsers(req, res){    
    const listUser =  await usuarios.findAll({attributes: ["id","nome","email"]})
    console.log("Listando todos usuários")     
    return res.status(200).send(listUser)
  }

  async listUsersID(req, res){    
      const user =  await usuarios.findByPk(req.params.id, {attributes: ["id","nome","email"]})
      console.log(`Listando usuario ${user.nome}`)
      return res.status(200).json(user)    
  }

  async createUser(req, res){    
    await usuarios.create(req.body)
    console.log(`Usuário ${req.body.nome} criado com sucesso!!`);
    return res.status(200).send("Usuário criado com sucesso!!")
  } 

  async deleteUser(req, res){    
    await usuarios.destroy({where: {id: req.params.id}})
    return res.status(200).send("Usuário deletado com sucesso!!")
  } 
  
  async updateUser(req, res){    
    await usuarios.update(req.body ,{where: {id: req.params.id}})
    return res.status(200).send("Usuário atualizado com sucesso!!")
  }
}


module.exports = new userController
