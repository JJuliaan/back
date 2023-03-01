const fs = require('fs')

class ProductManager {
  static #id = 0
  constructor(path) {
    this.products = []
    this.path = path
    this.id = ++ProductManager.#id
  }
  
  async addProduct(product) {
    try {
      const { id, title, description, price, thumbnail, code, stock } = product
      const productInfo = {
        id: this.id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      }


      this.products.push(productInfo)
      await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, '\t'))
      console.log('Producto creado con exito');
      console.log(this.id);
      
    } catch (error) {
      
      console.log(error);
    }
  }

  async getProducts() {
    try {
      const data = await fs.promises.readFile(this.path, 'utf-8')
      const response = JSON.parse(data)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async getProductsById(id) {
    try {
      await fs.promises.readFile(this.path, 'utf-8', (error, id) => {
        const idBuscador = this.products.find((productos) => productos.id === this.products.id)
      })
    } catch (error) {
      console.log(error);
    }
  }


} 
//   addProduct(product) {
//     try{ 
//       this.products.find((productos) => productos.code === product.code)
//       console.log("El producto ya existe")
//       return
//     }
//     if (
//       !product.title ||
//       !product.description ||
//       !product.price ||
//       !product.thumbnail ||
//       !product.code ||
//       !product.stock
//     ) {
//       console.log("Faltan datos")
//       return;
//     }
//     product.id = this.products.length + 1
//     this.products.push(product)
//   }
  
//   getProducts() {
//     return this.products
//   }
  
//   getProductById(id) {
//     const product = this.products.find((productos) => productos.id === id)
//     if (!product) {
//       console.log("Not found")
//       return
//     }
//     return product
//   }
// }
  
module.exports = ProductManager
  

