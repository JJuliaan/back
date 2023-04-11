const express = require('express');
const handlebars = require('express-handlebars')
const router = require('./routerApp')
const dbConnect = require('../db')
const app = express()


const morgan = require('morgan');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.use(morgan('dev'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

router(app)
dbConnect()


module.exports = app