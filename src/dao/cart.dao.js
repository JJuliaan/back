const Carts = require('./models/carts.model')

class CartsDao {
    constructor() {}

    async findAll() {
        return await Carts.find()
    }

    async findOne(id) {
        return await Carts.findOne({_id: id})
    }

    async create(newCart) {
        const {cart, productId, quantity} = newCart
        const newCartInfo = {
            cart:{
                productId,
                quantity
            }
        }
        return await Carts.create(newCartInfo)
    }

    async updateOne(id, update) {
        const {cart, productId, quantity} = update
        const updateCartInfo = {
            cart:{
                productId,
                quantity
            }
        }
        return await Carts.updateOne({_id: id}, updateCartInfo)
    }

    async delete() {
        return await Carts.deleteMany()
    }
}


module.exports = CartsDao