// var moment = require('moment');

// const actual = moment();
// const nacimiento = moment("23/10/1995", "DD/MM/YYYY")

// console.log("Hoy es:", actual.format("DD/MM/YYYY"))
// console.log("Nací el:", nacimiento.format("DD/MM/YYYY"))

// let fechaDias = actual.diff(nacimiento, "days")
// let fechaAnios = actual.diff(nacimiento, "years")

// console.log("Han pasado", fechaDias, "días")
// console.log("Tengo", fechaAnios, "años")

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

const Contenedor = require ('../segundoDesafio/segundo-desafio.js')
const producto = new Contenedor('./productos.txt');


// Servidor
const server = app.listen(PORT, () => {
    console.log(
        `Servidor Http escuchando en el puerto ${server.address().port}`
        );
    })
    
app.get('/productos', async (req, res) => {
    try {

        const productos = await producto.getAll()
        res.send(productos)
        
    } catch (error) {
        
        res.send(error)

    }
})

app.get('/productoRandom', async (req, res) => {
    try {

        const productos = await producto.getAll()

        const index = Math.floor(Math.random() * productos.length)

        res.send(productos[index])
        
    } catch (error) {
        
        res.send(error)

    }

    // const randomNumber = Math.ceil(Math.random() * producto.getAll().length)
    // const productRandom = producto.getAll().find(item => item.id === randomNumber)
    // res.send(productRandom);
})





