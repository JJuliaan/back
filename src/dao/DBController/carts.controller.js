const { Router } = require('express')
const Carts = require('../models/carts.model')
const router = Router()

router.get('/:cid', async(req, res) => {
    try {
        const cid = req.params.cid
        const buscador = await Carts.findOne({_id: cid})

        res.json({buscador})
    } catch (error) {
        console.log(error)
    }
})


router.post('/', async(req, res) => {
    try {
        const {cart, productId, quantity} = req.body
        const newCartInfo = {
            cart:{
                productId,
                quantity
            }
        }
        const newCart = await Carts.create(newCartInfo)
        res.json({message: newCart})
    } catch (error) {
        res.json({message: error})
    }
})

router.put('/:cid', async(req, res) => {
    try {
        const cid = req.params.cid
        const {cart, productId, quantity} = req.body
        const updateCartInfo = {
            cart:{
                productId,
                quantity
            }
        }
        const updateCart = await Carts.updateOne({_id: cid}, updateCartInfo)
        res.json({message: updateCart})
    } catch (error) {
        res.json({message: error})
    }
})




module.exports = router