const { Router } = require('express')
const Products = require('../models/products.model')
const router = Router()

router.get('/', (req, res) => {
    res.json({message: "FUNCIONA"})
})

module.exports = router