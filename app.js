"use strict";

const createError = require('http-errors')
  , express = require('express')
  , path = require('path')
  , cookieParser = require('cookie-parser')
  , logger = require('morgan')
  , cors = require('cors')
  , app = express()
  , passport = require('passport')
  , helmet = require('helmet')
  , mustacheExpress = require('mustache-express');
;

require('dotenv').config({
  path: process.env.NODE_ENV === 'dev' ? '.dev.env' : '.env'
});

const templateDir = path.join(__dirname, '.', 'views');

// Config middlewares
app.use(helmet())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Config client side
app.use(express.static(path.join(__dirname, 'public')));
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', templateDir);

// Proxy
app.get('/', require('./server/routes/concierge/concierge'));

// Errors
app.use((req, res, next) => {
  next(createError(404));
});
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
