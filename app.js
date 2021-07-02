const createError = require('http-errors')
  , express = require('express')
  , path = require('path')
  , cookieParser = require('cookie-parser')
  , logger = require('morgan')
  , cors = require('cors')
  , app = express()
  , passport = require('passport')
  ;

  require('dotenv').config({
    path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
  });

var MicrosoftStrategy = require('passport-microsoft').Strategy;
  passport.use(new MicrosoftStrategy({
      clientID: 'dfe50209-0856-4610-a4fd-f51b0bcf6765',
      clientSecret: 'e8f1c71f-0608-44cc-bc42-3112cef7b3e9',
      callbackURL: "http://localhost:3000/auth/microsoft/callback",
      scope: ['user.read']
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOrCreate({ userId: profile.id }, function (err, user) {
        return done(err, user);
      });
    }
  ));

// Config middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Config client side
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Views
app.get('/', require('./server/routes/pages/home.js'));
app.get('/adm', require('./server/routes/pages/adm.js'));
app.get('/login', require('./server/routes/pages/login.js'));

// Errors
app.use((req, res, next) => {
  next(createError(404));
});
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
