const express = require('express');
const Api = require('./api/api')

const api = new Api()
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//seteamos el motor de plantillas
app.set('view engine', 'ejs');

// Rutas //
app.get('/', (req, res) => {
    res.render('pages/main');
});

app.get('/productos', (req, res) => {
    let array = api.getAll()
    console.log(array)
    res.render('pages/products', {array});
});

app.post('/productos', (req, res) => {
    let product = {
        ...req.body
    };
    api.addProduct(product)  
    console.log(req.body)
    res.redirect('/')
    });


// Servidor //
const PORT = 8080
const server = app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${server.address().port}`)
    })
server.on('error', error => console.log(`Error en servidor ${error}`))