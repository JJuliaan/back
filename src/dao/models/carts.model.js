const mongoose = require('mongoose')

const cartsCollection = 'cart'

const cartsSchema = new mongoose.Schema({
    products: [
        {
            productId: Number,
            quantity: Number
        }
    ]
})

const Carts = mongoose.model(cartsCollection, cartsSchema)

module.exports = Carts