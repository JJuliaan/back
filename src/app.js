const express = require('express');
const handlebars = require('express-handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const hbs = handlebars.create({
    handlebars: allowInsecurePrototypeAccess(require('handlebars')),
    defaultLayout: 'main'
});
const cookieParser = require('cookie-parser')
const router = require('./routerApp')
const dbConnect = require('../db')
const app = express()


const morgan = require('morgan');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.use(cookieParser());

app.use(morgan('dev'))

app.engine('handlebars', hbs.engine)
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

router(app)
dbConnect()


module.exports = app