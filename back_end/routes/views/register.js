const Router = require('express').Router;

module.exports = (req, res) => {

    Router.get('/register', res.render('register'));

};