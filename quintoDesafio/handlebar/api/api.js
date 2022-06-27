class Api {
    constructor(){
        this.productsArray = []
    }
    
    getAll() {
        return this.productsArray;
    }

    addProduct(product) {
        const id = this.productsArray.length === 0 ? 1 : this.productsArray[this.productsArray.length - 1].id + 1
        product.id = id;
        this.productsArray.push(product)
        return product
    }

    getById(id) {
        return this.productsArray.find(elem => elem.id == id)
    }

    updateProduct(id, newProduct) {
        const elementIndex = this.productsArray.findIndex((e) => e.id == id);

        if (elementIndex === -1) return { error: true };
    
        this.productsArray[elementIndex] = {
          ...this.productsArray[elementIndex],
          ...newProduct,
        };
    
        return this.elements[elementIndex];
    }

    deleteProduct(id) {
        this.productsArray = this.productsArray.filter(elem => elem.id != id)
    }

}

module.exports = Api
