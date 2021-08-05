
  
/*

Entity: Escola
Layer: route
Module: read.js

Namespace --------------------/

idEscola
idTenant
nome
idPessoa
DataCad
isActive

/------------------------------

Visit https://aes.tec.br 
GitHub https://github.com/Arte-e-Software/aes.build.git
Author Pedro Silva aes.tec.br@gmail.com

2021 @ SP-Brasil

Building with aes.build v1
Path: pedrosilva_Thu Aug 05 2021 10:38:51 GMT-0300 (Brasilia Standard Time)

*/
    

  const express = require('express')
    ,router = express.Router();
    ;

  router.get('/Escola/read', (req, res) => {
    
    res.render('entity/Escola/read', {module: "read" ,fields: [{"name":"nome","type":"String","length":"300","null":false,"default":false,"searchable":true,"form":{"label":"Nome","type":"text","value":"","required":true,"placeholder":"Informe o nome da sua Escola"}},{"name":"idPessoa","type":"Number","length":"","null":false,"default":false,"searchable":false,"form":false},{"name":"DataCad","type":"Date","length":"","null":false,"default":"Date()","searchable":false,"form":false},{"name":"isActive","type":"Boolean","length":"","null":false,"default":"1","searchable":true,"form":false}]});

  });

  module.exports = router;
  
  