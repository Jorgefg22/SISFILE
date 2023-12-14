const usuarios = require('../models').usuarios;
const jwt = require('../services/jwt')

function create(req,res){

 usuarios.create(req.body)
 .then(usuario => {
    res.status(200).send({usuario});
 })
 .catch(err=>{
    res.status(500).send({err});
 })

}


function login(req,res){
   usuarios.findOne({
      where:{
         usuario:req.body.usuario,
         password:req.body.password
      }
   })
   .then(usuario=>{
      if (usuario) {
         res.status(200).send({
            usuario:usuario,
            token:jwt.createToken(usuario)
         });
      }else{
         res.status(401).send({message: "Acceso no autorizado"});
      }
          
      
   })
   .catch(err=>{
      res.status(500).send(err)
   })
}

module.exports = {
    create,login
}