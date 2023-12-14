const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// cabeceras
app.use((req,res,next)=>{
    res.header('Acces-Control-Allow-Origin','*');
    res.header('Acces-Control-Allow-Headers', 'Autorization, X-API-KEY, Origin, X-Requested-With,Contend-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-MEthod','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow', 'GET,POST,OPTIONS,PUT,DELETE');
    next();

}); 

require('./server/routes/usuarios')(app);

app.get('*',(req,res)=>{
    res.status(200).send({message: "Bienvenido al servidor Node.js"})
})

module.exports= app;