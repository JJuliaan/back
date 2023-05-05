const { Router } = require('express')
const router = Router()
const UsuariosDB = require('../usersDB.dao')
const Users = new UsuariosDB()
const privateAccess = require('../../middlewares/privateAccess.middlewares')
const publicAccess = require('../../middlewares/publicAccess.middlewars')

router.get('/', publicAccess, async (req, res) => {
    res.render('signup.handlebars')
})



router.post('/', async (req, res) => {
    try {

        const { first_name, email, password } = req.body

        const usuario = {
            first_name,
            email,
            password
        }

        const newUsuario = await Users.crearUsuario(usuario)

        res.status(201).json({Status: 'succes', message: newUsuario})

    } catch (error) {
        console.log(error.message);
        res.status(500).json({Status: 'error', error: 'Internal server error'})

    }
})



module.exports = router