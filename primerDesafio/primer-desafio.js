// PRIMER DESAFIO
// class Usuario{
//     constructor(nombre, apellido, libros, mascotas){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.libros = libros;
//         this.mascotas = mascotas;
//     }

//     getFullName(){
//         return `${this.nombre} ${this.apellido}`
//     }

//     addMascota(string){
//         this.mascotas.push(string)
//     }
    
//     countMascotas(){
//         return this.mascotas.length
//     }
    
//     addBook(datoUno, datoDos){
//         this.libros.push({nombre: datoUno, autor: datoDos})
//     }

//     getBookNames(){
//         return this.libros.map(libro => libro.nombre)
//     }
// }

// let user = new Usuario( "Mario", "Massonnat", [], [] )

// // nombre completo
// console.log(user.getFullName());

// // mascotas
// user.addMascota("Gatito");
// user.addMascota("Mamut");

// // cantidad de mascotas
// console.log(user.countMascotas());

// // agregar libro
// user.addBook( "En las montañas de la locura", "H.P. Lovecrat");
// user.addBook( "1984", "George Orwell");

// // nombres de libros
// console.log(user.getBookNames());



// function mostrarLista (arr) {
//     if (arr == undefined) {
//         arr = "Lista vacia"
//     }
//     return arr
// }
// // console.log(mostrarLista(["hola", "chau", "nos vemos"]))
// // console.log(mostrarLista())

// // ((num) => {return num}) ([20, 20, 10]);

// function crearMultplicador(numUno){
//     let num = numUno;
//     return function(numDos){
//         return num * numDos
//     }
// }

// let result = crearMultplicador(2)
// console.log(result(5))



// DESAFIO CONTADOR CLASE 21/5
// class Contador{
//     constructor(persona){
//         this.persona = persona;
//         this.cuentaIndividual = 0 
//     }

//     static cuentaGlobal = 0

//     obtenerResponsable() {
//         return this.persona;
//     }

//     obtenerCuentaIndividual() {
//         return this.cuentaIndividual
//     }
//     obtenerCuentGlobal() {
//         return Contador.cuentaGlobal
//     }
//     contar() {
//         this.cuentaIndividual++
//         Contador.cuentaGlobal++
//     }
// }

// let mario = new Contador("Mario")
// mario.contar();
// mario.contar();
// mario.contar();

// console.log(`Persona:${mario.obtenerResponsable()} / Cuenta individual:${mario.obtenerCuentaIndividual()} / Cuenta total:${mario.obtenerCuentGlobal()}`)



// fs = require('fs');

// class Archivo {
//     constructor(nombre){
//     this.nombre = nombre;

// }

// async leer(){

//     try{

//         let content = await fs.promises.readFile(this.nombre, 'utf-8')

//         if (content) return console.log(content)

//     } catch (err) {

//         console.error([])

//     }

// }

// async guardar(Producto){

//     try {

//         Productos.push(Producto)

//         await fs.promises.writeFile(this.nombre, JSON.stringify(Productos, null, '\t'))

//     } catch (err){

//     console.error('Se produjo un error: ' + err)

//     }

// }

// async borrar () {

//     try {

//         Productos.push(Producto)

//         await fs.promises.unLink(this.nombre, (err) =>{

//         if(err) return console.log('Error al borrar archivo: ' + err)

//         })

//     }  catch(err){

//         console.error('Error al borrar archivo: ' + err)

//         }}

// }

// const archivo = new Archivo ('./Productos.txt')

// archivo.guardar({title: 1, name: 'Espatula Plastica Condor', price: 290, thumbnail:'https://www.ramospapeleria.com.ar/img/p/30987/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', id: Productos.length + 1 })

// archivo.guardar({title: 2, name: 'Block Brock Bauhaus Pastel', price: 250, thumbnail:'https://www.ramospapeleria.com.ar/img/p/19609/1.jpeg?width=300&mode=max&upscale=false&format=webp&quality=90', id: Productos.length + 1})

// archivo.guardar({title: 3, name:'‘Block Brock Bauhaus', price: 1680, thumbnail:'https://www.ramospapeleria.com.ar/img/p/19609/1.jpeg?width=300&mode=max&upscale=false&format=webp&quality=90', id: Productos.length + 1})

// archivo.leer()