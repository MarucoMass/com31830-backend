class Api {
    productsArray = []
    
    getAll() {
        return this.productsArray;
    }

    addProduct(product) {
        const id = this.productsArray.length === 0 ? 1 : this.productsArray[this.productsArray.length - 1].id + 1
        product.id = id;
        this.productsArray.push(product)
    }

    getById(id) {
        return this.productsArray.find(elem => elem.id == id)
    }

    updateProduct(id, newProduct) {
        for (const p of this.productsArray) {
            if(p.id === id){
                p.title = newProduct.title;
                p.thumbnail = newProduct.thumbnail;
                p.price = newProduct.price;
            }
        }
    }

    deleteProduct(id) {
        this.productsArray = this.productsArray.filter(elem => elem.id != id)
    }

}

module.exports = Api;