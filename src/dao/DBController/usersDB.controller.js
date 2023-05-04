const { Router } = require('express')
const router = Router()
const UsersDao = require('../usersDB.dao')
const Users = new UsersDao()
const privateAccess = require('../../middlewares/privateAccess.middlewares')
const publicAccess = require('../../middlewares/publicAccess.middlewars')

router.get('/', publicAccess, async (req, res) => {
    res.render('signup.handlebars')
})



router.post('/', async (req, res) => {
    try {

        const usuario = req.body

        const newUsuario = await Users.crearUsuario(usuario)

        res.status(201).json({status: 'succes', message: newUsuario})

    } catch (error) {
        console.log(error.message);
        res.status(500).json({status: 'error', error: 'Internal server error'})

    }
})



module.exports = router