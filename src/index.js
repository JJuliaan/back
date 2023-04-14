const app = require('./app')
const ProductManager = require("./dao/fileManager/productManager");
const path = require("path")
const producto = new ProductManager(path.join(__dirname, "./files/products.json"))


const { port } = require('./config/app.config')
const { Server } = require('socket.io')

const httpServer = app.listen(port, () => {
    console.log(`Server running at ${port}`);
})

const io = new Server(httpServer)

io.on('connection', async socket => {
    console.log(socket.id);
    console.log("Ciente conectado")

    const products = await producto.getProducts()
    io.emit('listProducts', { products })

    socket.on('newProduct', product => {
        console.log(product)
        producto.addProduct(product)
        socket.broadcast.emit('listProducts', product)
    })
    
    console.log(`Cliente conectado con id: ${socket.id}`)

    socket.on('newUser', user => {
        socket.broadcast.emit('userConnected', user)
        socket.emit('messageLogs', messages)
    })

    socket.on('message', data => {
        messages.push(data)
        io.emit('messageLogs', messages)
    })



})