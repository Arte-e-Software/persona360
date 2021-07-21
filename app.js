"use strict";

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

// Dotenv file
require('dotenv').config({ path: process.env.NODE_ENV === 'dev' ? '.dev.env' : '.env' });

// Config middlewares
app.use(helmet())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Config client side
app.use(express.static(path.join(__dirname, '/front_end/')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '.', 'views'));

// Rotas GET das Views
let view = route.view;
app.get(view.home.path, view.home.router);
app.get(view.register.path, view.register.router);
app.get(view.adm.path, view.adm.router);
app.get(view.conhecer.path, view.conhecer.router);

// Rotas da API (PROXY orquestra TENANT, VERB => CREATE, READ, LIST, UPDATE, DELETE)
let api = route.api;
app.get(api.tenant.proxy.path, api.tenant.proxy.router);

// Errors
app.use((req, res, next) => { next(createError(404)); });
app.use((err, req, res) => {
  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};
  res.status(err.status || 500);
  res.render('error');

});

module.exports = app;
