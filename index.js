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
    const product2 = 
    {
        title: "Ultra Prueba2",
        description: "Prueba2",
        price: 10002,
        thumbnail: "img",
        code: 2042,
        stock: 102
    }
    await producto.addProduct(product2)
    // const data = await producto.getProducts()
    // console.log(data);
    // const result = await producto.getProductsById(2)
    // console.log(result);
    // const eliminar = await producto.deleteProduct(1)
    // console.log(eliminar);
    // const actualizar = await producto.updateProduct(1, {
    //     name: "hola",price: 1900000
    // })
}

productos()
