const ProductManager = require("./js/productManager");
const producto = new ProductManager("./products.json");


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
    // await producto.addProduct(product)
    // const data = await producto.getProducts()
    // console.log(data);
    // const result = await producto.getProductsById(2)
    // console.log(result);
    const eliminar = await producto.deleteProduct(3)
    console.log(eliminar);
}

productos()
