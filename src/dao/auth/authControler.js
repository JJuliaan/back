const { Router } = require('express')
const Users = require('../models/usersDB.model')
const publicAccess = require('../../middlewares/publicAccess.middlewars')
const router = Router()

router.post('/',publicAccess, async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await Users.findOne({ email })

        if (!user) return res.status(400).json({ status: 'error', error: 'El usuario y la contraseña no coinciden' })

        if (user.password !== password) return res.status(400).json({ status: 'error', error: 'El usuario y la contraseña no coinciden' })

        req.session.user = {
            first_name: user.first_name,
            email: user.email,
            role: user.role
        }
        
        res.json({ status: 'success', message: 'Sesion iniciada' })
        next()
    } catch (error) {
        res.status(500).json({ status: 'error', error: 'Internal server error' })
    }
})

router.get('/', async (req, res) => {
    res.render('login.handlebars')
})

router.get('/logout', (req,res) => {
    req.session.destroy(error=> {
        if(error) return res.json({ error })
        res.redirect('/users')
    })
})


module.exports = router