const Router = require('express').Router;

module.exports = (req, res) => {

    Router.get('/', res.render('home') );

};