const ProductManager = require("./js/productManager");
const producto = new ProductManager("./files/products.json");

// const productos = async () => {
//     const product =
//     {
//         title: "Ultra Prueba",
//         description: "Prueba",
//         price: 1000,
//         thumbnail: "img",
//         code: 204,
//         stock: 10
        
//     }
//     const product2 = 
//     {
//         title: "Ultra Prueba2",
//         description: "Prueba2",
//         price: 10002,
//         thumbnail: "img",
//         code: 2042,
//         stock: 102
//     }
//     // await producto.addProduct(product2)


//     const data = await producto.getProducts()
//     // console.log(data);
//     const result = await producto.getProductsById(2)
//     console.log(result);
    // const eliminar = await producto.deleteProduct(1)
    // console.log(eliminar);
    // const actualizar = await producto.updateProduct(1, {
    //     name: "hola",price: 1900000
    // })
// }
// productos()

//--------------------------------------------------------------------------------------------------------------------------

// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end('hola a todos!!!!!')
// })

// server.listen(3000, () => {
//     console.log('server corriendo en el puerto 3000');
// })

//----------------------------------------------------------------------------------------------------------------------------

// import { Express } from "express";
const express = require('express')
const port = 3000
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/products', async (req, res) => {
    const { limit } = req.query
    const products = await producto.getProducts()
    if (limit) {
        res.send({products: products.slice(0,limit)})
    } else {
        res.send({ products: products })
    }
    
})

app.get('/products/:pid', async (req, res) => {
    const pid = parseInt(req.params.pid)
    const productPid = await producto.getProductsById(pid)
    console.log(productPid);
    res.send({pid: productPid})

})



app.listen(port, () => {
    console.log(`Server running at ${port}`);
})

// app.get('/saludo', (req, res) => {
//     res.json({ mensaje: 'Hola a todos desde Express js' } )
// })

// app.get('/usuario', (req, res) => {
//     const user = { 
//         nombre: 'Julian',
//         apellido: 'Aguero',
//         edad: 19,
//         mail: 'julyagueroa@gmail.com'
//     }
//     res.json({ message: user })
// })

// app.get('/post/:id/comments/:idComment', (req, res) => {
//     const { id, idComment } = req.params

//     res.send({ message: `El id del post es el ${id}, y el comentario es el ${idComment}` })
// })

// app.get('/bienvenido', (req, res) => {
//     res.send(`<h1 style = "color: blue"> Bienvenido a todos en azul </h1>`)
// })

// app.get('/consola', (req, res) => {
//     res.send({ message: 'Las consolas' })
// })

