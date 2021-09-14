const rateLimit = require('express-rate-limit');


const corsOption = {
    origin : function (origin, callback) {
        callback(null, true)
        
        if (process.env.listaBlanca.indexOf(origin) !== -1){
            callback(null, true)
        }else {
            callback(new Error('No autorizado por Cors'))
        }
    }
}

log = function (req,res,next) {
    const {method,path,query,body} = req;
    console.log(`${method} - ${path} - ${JSON.stringify(query)} - ${JSON.stringify(body)}`);
    next()
}

Autenticar = function (req,res,next) {
    const {nombre,codigo,clave} = req.body;
    if(clave == "2245tru3"){
        return next()
    }
    else{
        return res.status(400).json("Clave no reconocida")
    }
}

const limitador = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // Limite de peticiones
    message: 'Limite de solicitudes exedido'
})

module.exports = {limitador, Autenticar, log, corsOption}


