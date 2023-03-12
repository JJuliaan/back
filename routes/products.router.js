const ProductManager = require("../src/productManager");
const producto = new ProductManager("../files/products.json")
const { Router } = require("express");

const router = Router()

router.get('/', async (req, res) => {
    const { limit } = req.query
    const products = await producto.getProducts()
    if (limit) {
        res.send({products: products.slice(0,limit)})
    } else {
        res.send({ products: products })
    }
})

router.get('/:pid',  async (req, res) => {
    const pid = parseInt(req.params.pid)
    const productPid = await producto.getProductsById(pid)
    console.log(productPid);
    res.send({pid: productPid})

})

router.put('/:pid', (req, res) => {
    const pid = parseInt(req.params.pid)
    const nuevo = req.body
    producto.updateProduct(pid, nuevo)
    // console.log(pid);
    res.json({message: "Producto actualizado"})
})

router.post('/', (req,res) => {
    const newProduct = req.body
    console.log(newProduct);
    producto.addProduct(newProduct)
    res.json({message: "Producto creado"})
})

router.delete('/:pid', (req, res) => {
    const pid = parseInt(req.params.pid)
    producto.deleteProduct(pid)
    // console.log(pid);
    res.json({message: "Producto eliminado"})
})




module.exports = router