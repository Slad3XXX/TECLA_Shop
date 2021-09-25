const express = require("express");
const dotenv = require('dotenv');
const db = require('./db/db');
const midd = require('./middlewares/midd');
const cors = require('cors');
const app = express();
const axios = require('axios');

dotenv.config();


//Middlelware
app.use(express.json());
app.use(cors());
app.use(midd.log);
app.use(midd.limitador);

app.listen(process.env.PORT, function() {
    console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`);
});


//Endpoint para obtener el Carrito
app.get('/cart', cors(midd.corsOption), function(req, res) {
    res.send(db.Cart)
})


app.post('/cart', midd.Autenticar, function(req, res) {
    if (!req.body.id || !req.body.nombre || !req.body.cantidad || !req.body.precio) {
        db.respuesta = {
            codigo: 502,
            error: true,
            mensaje: 'Llenar todos los campos necesarios'
        }
    } else {
        if (db.buscaProducto(req.body.id)) {
            db.respuesta = {
                codigo: 200,
                error: false,
                mensaje: 'Este producto ya esta agregado'

            }
        } else {
            db.nuevoProducto(req.body.id, req.body.nombre, req.body.cantidad, req.body.precio)
            db.respuesta = {
                codigo: 200,
                error: false,
                mensaje: '¨Producto Agregado'
            }
        }
    }
    res.send(db.respuesta)
})



app.delete('/cart/:id', function(req, res) {
    if (db.borraProducto(req.params.id)) {
        db.respuesta = {
            codigo: 200,
            error: false,
            mensaje: 'Producto eliminado'
        }
    } else {
        db.respuesta = {
            codigo: 421,
            error: true,
            mensaje: 'Producto no existe'
        }
    }
    res.send(db.respuesta);
})

app.get('/products', async function(req, res) {
    console.log('ingreso')
    try {
        const products = await axios.get(process.ENV.URL)

        res.send(products.data)
    } catch (error) {
        res.send(error.message)
    }
})