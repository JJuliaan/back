const { Router } = require('express')
const Products = require('../models/products.model')
const router = Router()

router.get('/', async (req, res) => {
    try {
        const products = await Products.find()

        res.json({products})
    } catch (error) {
        console.log(error.message)
        res.status(400).json({error: 'El Producto no pudo ser creado'})
    }
})

router.get('/:pid', async (req, res) => {
    try {
        const pid = req.params.pid
    
        const buscador = await Products.findOne({_id: pid})
    
        res.json({message: buscador})
        
    } catch (error) {
        console.log(error.message)
        res.status(400).json({error: 'El Producto no pudo ser creado'})
    }
})

router.post('/', async (req, res) => {
    try {
        const { title, price, description, thumbnail, code, stock, status, category} = req.body
        const newProduct = {
            title, 
            price, 
            description, 
            thumbnail, 
            code, 
            stock, 
            status, 
            category
        }

        if(!title || !price || !description || !thumbnail || !code || !stock || !status || !category) return res.json({message: "Faltan datos"})

        const newsProducts = await Products.create(newProduct)
        res.status(201).json({
            message: "Producto creado",
            product: newsProducts
    })

    } catch (error) {
        console.log(error.message)
        res.status(400).json({error: 'El Producto no pudo ser creado'})
    }
})

router.put('/:pid', async (req, res) => {
    try {
        const pid = req.params.pid
        const { title, price, description, thumbnail, code, stock, status, category} = req.body
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

        const productUpdate = await Products.updateOne({_id: pid}, updateProduct)
        res.json({ message: productUpdate})

    } catch (error) {
        res.json(error);
    }
})

router.delete('/:pid', async (req, res) => {
    try {
        const pid = req.params.pid

        const deleteProduct = await Products.updateOne({_id: pid}, {status: false})
        res.json({message: "Producto eliminado", products: deleteProduct})
    } catch (error) {
        
    }
})


module.exports = router