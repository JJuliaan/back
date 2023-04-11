const mongoose = require('mongoose')

const messagesCollection = 'message'

const messagesSchema = new mongoose.Schema({
    message: {
        type: String,
        require: true
    },
    image: String
})

const Messages = mongoose.model(messagesCollection, messagesSchema)

module.exports = Messages