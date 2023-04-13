const Products = require("./models/products.model");


class ProductsDao {
    constructor() {}

    async findAll() {
        try {
            return await Products.find({status: true})
        } catch (error) {
            return error
        }
    }

    async findOneId(id) {
        try {
            return Products.findOne({_id: id})
        } catch (error) {
            return error
        }
    }

    async create(product) {
        const { title, price, description, code, stock, status, category} = product
        const newProduct = {
            title, 
            price, 
            description, 
            code, 
            stock, 
            status, 
            category,
            thumbnail
        }

        if(!title || !price || !description || !thumbnail || !code || !stock || !category) return 'Faltan datos'

        return await Products.create(newProduct)
    }

    async uptadeOne(id, update) {
        const { title, price, description, thumbnail, code, stock, status, category} = update
        const updateProduct = {
            title, 
            price, 
            description, 
            thumbnail, 
            code, 
            stock, 
            status, 
            category
        }

        return await Products.updateOne({_id: id}, updateProduct)
    }
}

module.exports = ProductsDao