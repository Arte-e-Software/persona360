const router      = require('express').Router();
const controller  = require('../../../controller/bolsaenem/agendamento.create');

router.get('/api/bolsaenem/agendamento/create/', function(req, res) {
  
  controller(req, res);

});

module.exports = router;