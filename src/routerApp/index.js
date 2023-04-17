//Controladores de Files
const cartsRouterFile = require('../dao/fileSystem/carts.routerFile')
const productsRouterFile = require('../dao/fileSystem/products.routerFile')
const realTimeRouter = require('../dao/fileSystem/realTime.router')

//Controladores de mongoose
const usersController = require('../dao/DBController/users.controller')
const productsController = require('../dao/DBController/products.controller')
const cartsController = require('../dao/DBController/carts.controller')
const messagesController = require('../dao/DBController/message.controller')

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