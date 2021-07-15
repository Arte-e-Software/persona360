"use strict";

const createError = require('http-errors')
  , express = require('express')
  , path = require('path')
  , helmet = require('helmet')
  , app = express()
  , cookieParser = require('cookie-parser')
  , logger = require('morgan')
  , route = require('./back_end/routes/')
  ;

// Dotenv file
require('dotenv').config({ path: process.env.NODE_ENV === 'dev' ? '.dev.env' : '.env' });

// Config middlewares
app.use(helmet())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Config client side
app.use(express.static(path.join(__dirname, 'front_end')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '.', 'views'));

// Rotas GET das Páginas
let page = route.page;
app.get(page.home.path, page.home.router);
app.get(page.adm.path, page.adm.router);

// Rotas da API (CREATE, READ, LIST, UPDATE, DELETE)
let api = route.api;

// Errors
app.use((req, res, next) => { next(createError(404)); });
app.use((err, req, res) => {
  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};
  res.status(err.status || 500);
  res.render('error');

});

module.exports = app;
