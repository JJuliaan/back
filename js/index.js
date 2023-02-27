class ProductManager {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      if (this.products.find((p) => p.code === product.code)) {
        console.log("El producto ya existe");
        return;
      }
      if (
        !product.title ||
        !product.description ||
        !product.price ||
        !product.thumbnail ||
        !product.code ||
        !product.stock
      ) {
        console.log("Faltan datos");
        return;
      }
      product.id = this.products.length + 1;
      this.products.push(product);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      if (!product) {
        console.log("Not found");
        return;
      }
      return product;
    }
  }
  
  module.exports = ProductManager;
  


