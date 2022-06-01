// var moment = require('moment');

// // var a = moment([1995, 10]);
// let a = moment();
// let b = moment([10, 23, 1995])

// let fecha1 = a.format("MM-DD-YYYY")
// let fecha2 = b.format("MM-DD-YYYY")

// console.log(a.diff(b, 'year'))

// PROTOCOLO HTTP
// let http = require('http')
// let fecha = new Date(Date.now());
// let hora = fecha.getHours()
// const server = http.createServer((request, response) => {
//     if (hora >= 6 && hora < 13) {
//         response.end("Buen dia");
//     }
//     else if (hora >= 13 && hora < 20) {
//         response.end("Buenas tardes");
//     }    
//     else {
//         response.end("Buenas noches")
//     }
// })

// const connectedServer = server.listen(8080, () => {
//     console.log(
//       `Servidor Http escuchando en el puerto ${connectedServer.address().port}`
//     );
//   });
  

// EXPRESS
// const express = require ('express');
// const app = express()
// const PORT  = 8080
// let counter = 0

// const server = app.listen(PORT, () => {
//     console.log(
//         `Servidor Http escuchando en el puerto ${server.address().port}`
//         );
//     })
    
// app.get('/', (req, res) => {
//     res.send(`<h1>Bienvenidos al servidor express</h1>`)
//     })

// app.get('/visitas', (req, res) => {
//     counter++
//     res.send(`Cantidad de visitas ${counter}`)
// })

// app.get('/fhy', (req, res) => {
//     let date = new Date(Date.now())
//     res.send({fecha: date})
// })

// TERCER DESAFIO
const express = require ('express');
const app = express()
const PORT  = 8080
const fs = require ('fs');
const path = require('path')

// Class del desafio 2
class Contenedor {
    constructor(nombre){
        this.path =  `./${nombre}.txt`;
    }
    getAll () {
        let data = fs.readFileSync(path.join(this.path),'utf-8');
        return JSON.parse(data)
    }
}    
const producto = new Contenedor('productos');


// Servidor
const server = app.listen(PORT, () => {
    console.log(
        `Servidor Http escuchando en el puerto ${server.address().port}`
        );
    })
    
app.get('/productos', (req, res) => {
    res.send(producto.getAll())
})

app.get('/productoRandom', (req, res) => {
    const randomNumber = Math.ceil(Math.random() * producto.getAll().length)
    const productRandom = producto.getAll().find(item => item.id === randomNumber)
    res.send(productRandom);
})





