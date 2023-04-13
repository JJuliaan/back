const mongoose = require('mongoose')

const cartsCollection = 'cart'

const cartsSchema = new mongoose.Schema({
    cart:{

        productId: {
            type:Number,
            required: true
        },
        quantity: {
            type:Number,
            required: true
        }
    }
})

const Carts = mongoose.model(cartsCollection, cartsSchema)

module.exports = Carts