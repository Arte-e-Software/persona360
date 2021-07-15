"use strict";

const createError = require('http-errors')
  , express = require('express')
  , router = express.Router()
  , path = require('path')
  , helmet = require('helmet')
  , app = express()
  , cookieParser = require('cookie-parser')
  , logger = require('morgan')
  ;

// Rotas init
let routes = require('./server/routes/')
  , route = '/'
  , controller = () => { }
  ;

// Dotenv file
require('dotenv').config({
  path: process.env.NODE_ENV === 'dev' ? '.dev.env' : '.env'
});

// Config middlewares
app.use(helmet())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Config client side
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '.', 'views'));

// Rotas get
for (let i in routes) {

  route = routes[i].route;
  controller = routes[i].controller;
  app.get(route, router.get(route, (req, res) => { controller(req, res); }));

};

// Errors
app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
