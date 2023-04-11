//Controladores de Files
const cartsRouterFile = require('../dao/fileSystem/carts.routerFile')
const productsRouterFile = require('../dao/fileSystem/products.routerFile')

//Controladores de mongoose
const realTimeRouter = require('../dao/fileSystem/realTime.router')
const usersController = require('../dao/mongoDB/users.controller')
const productsController = require('../dao/mongoDB/products.controller')
const cartsController = require('../dao/mongoDB/carts.controller')
const messagesController = require('../dao/mongoDB/message.controller')

const router = app => {
    app.use('/api/products', productsRouterFile)
    app.use('/api/carts', cartsRouterFile)
    app.use('/realTimeProducts', realTimeRouter)
    app.use('/users', usersController)
    app.use('/carts', cartsController)
    app.use('/products', productsController)
    app.use('/message', messagesController)
}

module.exports = router