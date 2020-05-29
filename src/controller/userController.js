const { usuarios } = require('../../app/models/')
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken')
const login = require('../../middleware/login')
require('dotenv').config()

salt = bcrypt.genSaltSync(10)

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
    const user = req.body
    const checkEmail = await usuarios.findOne({ where: { email: user.email } });    
    if(checkEmail){
      return res.status(400).send('Email ja cadastrado')
    }
    const senhaHash = bcrypt.hashSync(req.body.senha, salt, (errBcrypt, hash)=>{
      return res.status(500).json({error: errBcrypt})
    })
    user.senha = senhaHash
    await usuarios.create(user)

    console.log(`Usuário ${user.nome} criado com sucesso!!`)
    return res.status(200).send("Usuário criado com sucesso!!")
  } 

  async deleteUser(req, res){    
    await usuarios.destroy({where: {id: req.params.id}})
    return res.status(200).send("Usuário deletado com sucesso!!")
  } 
  
  async updateUser(req, res){
    const user =  await usuarios.findByPk(req.params.id, {attributes: ["id","nome","email","senha"]})
    const checkPassword = await bcrypt.compare(req.body.antigasenha, user.senha)
        
    if (!checkPassword){
      return res.status(401).send("Senha anterior nao confere")
    }
    
    req.body.senha = bcrypt.hashSync(req.body.senha, salt, (errBcrypt, hash)=>{
      return res.status(500).json({error: errBcrypt})
    })
    await usuarios.update(req.body ,{where: {id: req.params.id}})
    return res.status(200).send("Usuário atualizado com sucesso!!")
        
    
  }

  async loginUser(req,res){
    const checkUser = await usuarios.findOne({ where: { email: req.body.email }})
    if(!checkUser){
      return res.status(401).send("Falha na autenticação")
    }
    
    const checkPassword = await bcrypt.compare(req.body.senha, checkUser.senha)
    
    if(!checkPassword){
      return res.status(401).send("Falha na autenticação")
    }
    
    const token = jwt.sign({
      id: checkUser.id,
      email: checkUser.email,

    },
    process.env.JWT_KEY,
    {
      expiresIn: "2h"
    })

    return res.status(200).send({message:"Autenticado com sucesso!!", token:token})
  }
}


module.exports = new userController
