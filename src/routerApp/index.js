const productsRouter = require('../routes/products.router')
const cartsRouter = require('../routes/carts.router')
const realTimeRouter = require('../routes/realTime.router')

const router = app => {
    app.use('/api/products', productsRouter)
    app.use('/api/carts', cartsRouter)
    app.use('/realTimeProducts', realTimeRouter)
}

module.exports = router