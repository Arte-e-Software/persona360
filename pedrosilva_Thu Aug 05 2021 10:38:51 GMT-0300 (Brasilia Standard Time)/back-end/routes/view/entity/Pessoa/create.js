
  
/*

Entity: Pessoa
Layer: route
Module: create.js

Namespace --------------------/

idPessoa
idTenant
nome
email
senha
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

  router.get('/Pessoa/create', (req, res) => {
    
    res.render('entity/Pessoa/create', {module: "create" ,fields: [{"name":"nome","type":"String","length":"300","null":false,"default":false,"searchable":true,"form":{"label":"Nome","type":"text","value":"","required":true,"placeholder":"Informe seu nome"}},{"name":"email","type":"String","length":"300","null":false,"default":false,"searchable":true,"form":{"label":"E-mail","type":"email","value":"","required":true,"placeholder":"Informe seu melhor e-mail"}},{"name":"senha","type":"String","length":"62","null":false,"default":false,"form":{"label":"Senha","type":"password","value":"","required":true,"placeholder":"Crie uma senha forte"}},{"name":"DataCad","type":"Date","length":"","null":false,"default":"Date()","searchable":false,"form":false},{"name":"isActive","type":"Boolean","length":"","null":false,"default":"1","searchable":false,"form":false}]});

  });

  module.exports = router;
  
  