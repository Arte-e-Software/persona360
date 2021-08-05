"use strict";

// Dotenv file
require('dotenv').config({ path: process.env.NODE_ENV === 'dev' ? '.dev.env' : '.env' });

const createError = require('http-errors')
  , express = require('express')
  , path = require('path')
  , helmet = require('helmet')
  , app = express()
  , cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser')
  , multer = require('multer')
  , logger = require('morgan')
  , route = require('./back_end/routes/')
  ;

// Config middlewares
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Config client side
app.use(express.static(path.join(__dirname, '/front_end/')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '.', 'views'));

// ROTAS
app.get(route.home.path, route.home.router);
app.get(route.adm.path, route.adm.router);
app.get(route.quemsomos.path, route.quemsomos.router);
app.all(route.api.path, route.api.router);

// Errors
app.use((req, res, next) => { next(createError(404)); });
app.use((err, req, res) => {
  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};
  res.status(err.status || 500);
  res.render('error');

});

module.exports = app;
