const Carts = require('./models/carts.model')

class CartsDao {
    constructor() {}

    async findAll() {
        return await Carts.find().populate('cart.product')
    }

    async findOne(id) {
        return await Carts.findOne({_id: id}).populate('cart.product')
    }

    async create(newCart) {
        return await Carts.create(newCart)
    }

    async updateOne(id, update) {
        return await Carts.updateOne({_id: id}, update)
    }

    async delete() {
        return await Carts.deleteMany()
    }
}


module.exports = CartsDao