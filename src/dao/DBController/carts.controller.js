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

        res.json({ message: await Carts.create() })
    } catch (error) {
        res.json({ message: error })
    }
})

router.patch('/:cid', async (req, res) => {
    try {
        const cid = req.params.cid
        const { product } = req.body

        const newProduct = await Carts.findOne({ _id: cid })
        newProduct.carts.push({ product })
        console.log(newProduct);

        const nuevo = await Carts.updateOne({ _id: cid }, newProduct)

        res.json({ message: nuevo })
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el producto en el carrito" })
        console.log(error.message);
    }
})




module.exports = router