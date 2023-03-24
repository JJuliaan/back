const express = require('express');
const handlebars = require('express-handlebars')
const { Server } = require('socket.io') 

const ProductManager = require("./productManager");
const producto = new ProductManager("./files/products.json")

const morgan = require('morgan');

const router = require('./routerApp');

const port = 8080
const app = express()

console.log(__dirname);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.use(morgan('dev'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

router(app)

const httpServer = app.listen(port, () => {
    console.log(`Server running at ${port}`);
})

const io = new Server(httpServer)

io.on('connection',async socket => {
    console.log(socket.id);
    console.log("Ciente conectado")

    const products = await producto.getProducts()
    io.emit('listProducts', { products })

    socket.on('newProduct', product => {
        console.log(product)
        producto.addProduct(product)
        socket.broadcast.emit('listProducts', product)
    })

})