const ProductManager = require("./js/productManager");
const producto1 = new ProductManager("./products.json");
const producto2 = new ProductManager("./products.json");
const producto3 = new ProductManager("./products.json");
const producto4 = new ProductManager("./products.json");
const producto5 = new ProductManager("./products.json");


const productos = async () => {
    const product =
    {
        title: "Ultra Prueba",
        description: "Prueba",
        price: 1000,
        thumbnail: "img",
        code: 204,
        stock: 10
        
    }
    await producto3.addProduct(product)
    const data = await producto3.getProducts()
    console.log(data);
    await producto3.getProductsById(3)
}

productos()
