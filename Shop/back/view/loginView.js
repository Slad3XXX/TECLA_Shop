const loginController = require('../controller/loginController')


module.exports = async (app) => {
    app.post('/login',async(req,res) => {
        let user = req.body;
        res.send(await loginController.login(user));
       
       
    });

    app.get('/login',(req,res) =>{
        res.render('login');
    })
};