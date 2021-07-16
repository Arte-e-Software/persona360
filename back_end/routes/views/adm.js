const Router = require('express').Router;

module.exports = (req, res) => {

    Router.get('/adm', res.render('adm'));

};