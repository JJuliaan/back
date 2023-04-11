const mongoose = require('mongoose')

const booksCollection = 'book'

const booksSchema = new mongoose.Schema({
    message: {
        type: String,
        require: true
    },
    image: String
})

const Messages = mongoose.model(booksCollection, booksSchema)

module.exports = Messages