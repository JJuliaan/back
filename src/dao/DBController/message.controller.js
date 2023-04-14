const { Router } = require('express')
const Messages = require('../models/messages.model')
const router = Router()

router.get('/', async (req, res) => {
    res.render('chat.handlebars')
});


module.exports = router