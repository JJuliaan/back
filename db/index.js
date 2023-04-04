const mongoose = require('mongoose')

const dbConnect = async() => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@backcurso.yvqog7v.mongodb.net/?retryWrites=true&w=majority')
        console.log('db is connected')
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnect