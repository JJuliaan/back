const express = require('express');
const productsRouter = require('../routes/products.router')
const cartsRouter = require('../routes/carts.router')
const morgan = require('morgan')
const port = 8080
const app = express()

console.log(__dirname);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use(morgan('dev'))
app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)


app.listen(port, () => {
    console.log(`Server running at ${port}`);
})

