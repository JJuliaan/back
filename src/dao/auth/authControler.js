const { Router } = require('express')
const Users = require('../models/usersDB.model')
const publicAccess = require('../../middlewares/publicAccess.middlewars')
const { isValidPassword } = require('../../ultis/cryptPassword')
const router = Router()

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await Users.findOne({ email })

        if (!user) return res.status(400).json({ status: 'error', error: 'El usuario y la contraseña no coinciden' })

        
        const passwordValid = isValidPassword(password, user)
        if(!passwordValid) return res.status(401).json({ status: 'error', error: 'El usuario y la contraseña no coinciden' })



        req.session.user = {
            _id: req.user._id,
            first_name: req.user.first_name,
            email: req.user.email,
            role: req.user.role
        }
        
        res.json({ status: 'success', message: 'Sesion iniciada' })
    } catch (error) {
        res.status(500).json({ status: 'error', error: 'Internal server error' })
    }
}, publicAccess)

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