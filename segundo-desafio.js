// SEGUNDO DESAFIO
const fsPromises = require('fs').promises
const path = require('path')
let arrayProductos = []

// funcion para chequear que exista el archivo txt
function fileExists(path) {
    try {
        return fsPromises.statSync(path).isFile();
    } catch (e) {
        return false;
    }
}

class Contenedor {
    constructor(nombre){
        this.path =  `./${nombre}.txt`;
    }
    
    async save (object) {
        try {
            if (fileExists(this.path)) {
                let data = await fsPromises.readFile(path.join(this.path), 'utf-8');
                let arrayProductos = JSON.parse(data);
                arrayProductos.push(object);
                await fsPromises.writeFile(path.join(this.path), JSON.stringify(arrayProductos));
                return console.log(object.id);        
            } else {
                arrayProductos.push(object)
                await fsPromises.writeFile(path.join(this.path), JSON.stringify(arrayProductos))
                return console.log(object.id);              
            }
        } catch (error) {
            console.error(`Ha habido un error al guardar los productos: ${error}`)
        }
    }
    
    async getById (number) {
        try {
            // await this.save()
            let data = await fsPromises.readFile(path.join(this.path), 'utf-8');
            let array = JSON.parse(data);
            let productId = array.find(item => item.id == number)
            if (productId !== undefined) { 
                return console.log(JSON.stringify(productId))
            } else {
                return console.log(null)
            }
        } catch (error) {
            console.error(`Ha habido un error al obtener el producto: ${error}`)
        }
    }
 
    async getAll () {
        try {
            // await this.save()
            let data = await fsPromises.readFile(path.join(this.path), 'utf-8');
            let arrayProductos = JSON.parse(data);
            console.log(arrayProductos)         
            return arrayProductos         
        } catch (error) {
            console.error(`Ha habido un error al traer los productos: ${error}`)
            return []
        }
    }

    async deleteById (number) {
        try {
            // await this.save()
            let data = await fsPromises.readFile(path.join(this.path), 'utf-8');
            let arrayProductos = JSON.parse(data);
            let productoBorrado = arrayProductos.find(item => item.id == number)
            let newArray = arrayProductos.filter(item => item.id != number)
            await fsPromises.writeFile(path.join(this.path), JSON.stringify(newArray));
            console.log(`Producto borrado. Se eliminó ${JSON.stringify(productoBorrado.title)}`)
        } catch (error) {
            console.error(`Ha habido un error al borrar el producto: ${error}`)
        }
    }

    async deleteAll () {
        // await this.save()
        await fsPromises.writeFile(path.join(this.path), '');
        console.log('Objetos eliminados')
    }

}


const producto = new Contenedor('productos');

// GUARDAR //
producto.save({
    title: 'lavarropas',
    price: 115000,
    thumbnail: 'https://www.lg.com/ar/images/lavarropas/md05962376/gallery/medium01.jpg',
    id: arrayProductos.length + 1 
});
producto.save({
    title: 'microondas',
    price: 25000,
    thumbnail: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/183B1/production/_113494299_gettyimages-489937746.jpg',
    id: arrayProductos.length + 1 
});
producto.save({
    title: 'heladera',
    price: 105000,
    thumbnail: 'https://yuhmak.vteximg.com.br/arquivos/ids/157106/E0000013680-HELADERA-BRIKET-1810-BL-INVERTER-356L--1-.png?v=637421644884930000',
    id: arrayProductos.length + 1 
});

// OBTENER POR ID //
// producto.getById(1);

// OBTENER TODOS //
// producto.getAll();

// BORRAR POR ID //
// producto.deleteById(3);

//BORARR TODO //
// producto.deleteAll();