'use strict'

const createError = require('http-errors')
const express = require('express')
const path = require('path')
const helmet = require('helmet')
const app = express()

// dotenv file
require('dotenv').config({ path: process.env.NODE_ENV === 'dev' ? '.dev.env' : '.env' })

// config contentSecurityPolicy
app.use(
	helmet.contentSecurityPolicy({
		useDefaults: true,
		directives: {
			"script-src": ["'self'", "'unsafe-inline'"]
		}
	})
)

// config express
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// config client side
app.use(express.static(path.join(__dirname, '/front-end/')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '.', 'views'))

// rotas - res.render
app.get('/', require('./back-end/routes/home'))
app.get('/adm', require('./back-end/routes/adm'))

// rotas - res.send json
app.all('/api', require('./back-end/routes/api'))

// Errors ******* ainda não trabalhei nisso
app.use((req, res, next) => { next(createError(404)) })
app.use((err, req, res) => {

	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'dev' ? err : {}
	res.status(err.status || 500)
	res.render('error')

})

module.exports = app