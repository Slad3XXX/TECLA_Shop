const { Connection } = require('tedious');
const userController = require('../controller/controlUser');
const sequelize = require('../db/conexion');

module.exports = async (app) =>{

    app.get('/',(req,res)=>{
        res.send('Bienvenido al inicio')
    })
   

    app.get('/index',(req,res)=>{
        res.render('index');
    })
   
    app.get('/register',(req,res)=>{
        res.render('register');
    })
   
    app.post('/register',async(req,res)=>{
        const usuario = req.body.usuario;
        const nombre = req.body.nombre;
        const primer_ap = req.body.primer_ap;
        const segundo_ap =req.body.segundo_ap;
        const password = req.body.password;
        const correo = req.body.correo;
        const num_cel = req.body.num_cel;
        sequelize.query("INSERT INTO  users (usuario,nombre,primer_ap,segundo_ap,password,correo,num_cel)VALUES('"+usuario+"','"+nombre+"','"+primer_ap+"','"+segundo_ap+"','"+password+"','"+correo+"','" +num_cel+"')")
        
        res.send('registro exitoso')
           
        
          
       

    });   

    app.post('/user',async(req,res) =>{
        let usuario = req.body;
        res.send(await userController.createU(usuario));
    });

    app.delete('/user/:usuario',async(req,res)=>{
        let usuario =req.params.usuario
        res.send(await userController.deleteU(usuario));
    });

    app.get('/user',async(req,res)=>{
        res.send(await userController.readU());
    });

    app.patch('/updateuser',async(req,res)=>{
        let usuario =req.body;
        res.send(await userController.updateU(usuario));
    })
}