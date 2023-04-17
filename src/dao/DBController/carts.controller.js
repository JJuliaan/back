const { Router } = require('express')
const CartsDao = require('../cart.dao')
const Carts = new CartsDao()
const router = Router()

router.delete('/peligroDelete', async (req, res) => {
    await Carts.delete()
    res.json({ message: "TODO ELIMINADO F" })
})

router.get('/all', async (req, res) => {
    try {
        res.json({ carts: await Carts.findAll() })
    } catch (error) {
        console.log(error)
    }
})

router.get('/:cid', async (req, res) => {
    try {
        const cid = req.params.cid
        const buscador = await Carts.findOne(cid)

        res.json({ buscador })
    } catch (error) {
        console.log(error)
    }
})


router.post('/', async (req, res) => {
    try {
        const { title, description, code, price, category, quantity } = req.body
        const newCartItem = {
            title,
            description,
            code,
            price,
            category,
            quantity
        }
        if (!title || !description || !code || !price || !category || !quantity) return res.json({ message: "Datos insuficientes" })

        const newCart = await Carts.create({ cart: [newCartItem] })
        return res.json({ message: newCart })

    } catch (error) {
        res.json({ message: error })
    }
})

router.put('/:cid/cart/:pid', async (req, res) => {
    try {
        const pid = req.params.pid
        const cid = req.params.cid
        const { title, description, code, price, category, quantity } = req.body
        const cartUpdate = {
            title,
            description,
            code,
            price,
            category,
            quantity
        }

        const cart = await Carts.findOne(cid)
        if (!cart) {
            return res.status(404).json({ message: "Carrito no encontrado" })
        }

        const updateResult = await Carts.updateOne(
            { _id: cid, "cart._id" : pid },
            { $set: { "cart.$": cartUpdate } }
        )

        if (updateResult.nModified === 0) {
            return res.json({ message: "El producto no existe en el carrito" })
        }

        return res.json({ message: "Producto actualizado correctamente" })

    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el producto en el carrito" })
        console.log(error.message);
    }
})




module.exports = router