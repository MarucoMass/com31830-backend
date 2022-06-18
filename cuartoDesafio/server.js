// import express from 'express';
// import Api from './api';
const express = require('express');
const Api = require('./api');

const app = express();
const api = new Api();
const router = express.Router();
// const { Router } = express;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(express.static(__dirname + '/public'))
app.use(express.static('public'))
// app.use('/static', express.static('public'))


app.use('/api/productos', router)


/* -------------------------- */
/* Rutas */

router.get ('/', (req, res) => {
    res.json(api.getAll());
}
)

router.get ('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(api.getById(id));
}
)

router.post ('/', (req, res) => {
    let product = {
        ...req.body
    };
    api.addProduct(product)
    res.json(product);
}
)

router.put ('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const newProduct = {
        title: req.body.title,
        price: req.body.price,
        thumbnail: req.body.thumbnail,
    }
    api.updateProduct(id, newProduct)
    res.json(api.getById(id))
}
)

router.delete ('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(api.deleteProduct(id))
}
)


/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))