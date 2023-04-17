const mongoose = require('mongoose')

const cartsCollection = 'cart'

const cartsSchema = new mongoose.Schema({
    type:
    [
        {
            title: String,
            price: Number,
            description: String,
            code: String,
            category: String,
            quantity: Number
        }
    ]
})

const Carts = mongoose.model(cartsCollection, cartsSchema)

module.exports = Carts