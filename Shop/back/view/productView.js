const productController = require('../controller/controlProdu');

module.exports = async (app)=>{

    app.post('/producto',async(req,res)=>{
        let id= req.body;
        res.send(await productController.createP(id));
    });

    app.delete('/producto/:id',async(req,res)=>{
        let id =req.params.id
        res.send(await productController.deleteU(id));
    })

    app.get('/producto',async(req,res)=>{
        res.send(await productController.readP());
    })

    app.patch('/updateproducto',async(req,res)=>{
        let id=req.body;
        res.send(await productController.updateP(id));
    })
}