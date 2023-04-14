const { Router } = require('express')
const CartsDao = require('../cart.dao')
const Carts = new CartsDao()
const router = Router()

router.delete('/peligroDelete', async (req, res) => {
    await Carts.delete()
    res.json({message: "TODO ELIMINADO F"})
})

router.get('/all', async (req, res) => {
    try {
        res.json({carts: await Carts.findAll()})
    } catch (error) {
        console.log(error)
    }
})

router.get('/:cid', async(req, res) => {
    try {
        const cid = req.params.cid
        const buscador = await Carts.findOne(cid)

        res.json({buscador})
    } catch (error) {
        console.log(error)
    }
})


router.post('/', async(req, res) => {
    try {
        const newCartInfo = req.body
        const newCart = await Carts.create(newCartInfo)
        res.json({message: newCart})
    } catch (error) {
        res.json({message: error})
    }
})

router.put('/:cid', async(req, res) => {
    try {
        const cid = req.params.cid
        const newUpdateCart = req.body

        const updateCart = await Carts.updateOne(cid, newUpdateCart)
        res.json({message: updateCart})
    } catch (error) {
        res.json({message: error})
    }
})




module.exports = router