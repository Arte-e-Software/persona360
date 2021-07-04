const proxy = require('./proxy');

function controller(req, res) {

    req ? proxy(req, res) : res.status(500).send({ erro: 'req is NULL' }) ;

}

module.exports = controller;