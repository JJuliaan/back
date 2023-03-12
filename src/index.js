const express = require('express');
const router = require("../routes/products.router");
const morgan = require('morgan')
const port = 8080
const app = express()

console.log(__dirname);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/src/public'))
app.use(morgan('dev'))
app.use('/api/products', router)


app.listen(port, () => {
    console.log(`Server running at ${port}`);
})

