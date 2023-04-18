const mongoose = require('mongoose')

const cartsCollection = 'cart'

const cartsSchema = new mongoose.Schema({
    carts: {
        type: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'product'
                },

            },
        ],
        default: []
    },
})

const Carts = mongoose.model(cartsCollection, cartsSchema)

module.exports = Carts