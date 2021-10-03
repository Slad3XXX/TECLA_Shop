
const Joi = require('joi');
const { loginModel } = require('./validationmodels/login');




module.exports.Loginvalidation = function(req,res,next){
    try{
        Joi.attempt(req.body,loginModel,"Error")
        return next();
    }catch (error){
        console.log(error)
        res.status(500).json({error:error.message})

    }
  
}
module.exports.Uservalidation = function(req,res,next){
    try{
        Joi.attempt(req.body,loginModel,"Error ")
        return next();
    }catch (error){
        console.log(error)
        res.status(500).json({error:error.message})

    }
  
}
