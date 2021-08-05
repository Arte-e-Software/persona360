
  
/*

Entity: Conteudo
Layer: route
Module: read.js

Namespace --------------------/

idConteudo
idTenant
nome
titulo
subtitulo
imagem
conteudo
comentar
publicar
privado
dataInicioPublicacao
dataFinalPublicacao
idPessoa
idEscola
idCurso
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

  router.get('/Conteudo/read', (req, res) => {
    
    res.render('entity/Conteudo/read', {module: "read" ,fields: [{"name":"tag","type":"String","length":"1000","null":false,"default":false,"searchable":true,"form":{"label":"Tag","type":"text","value":"","required":true,"placeholder":"Escreva as tags no formato #noticia #home #cursos"}},{"name":"titulo","searchable":true,"type":"String","length":"300","null":false,"default":false,"form":{"label":"Título","type":"text","value":"","required":true,"placeholder":"Digite o título do seu conteúdo (máximo 300 caracteres)"}},{"name":"subTitulo","searchable":true,"type":"String","length":"1200","null":false,"default":false,"form":{"label":"Subtítulo","type":"text","value":"","required":true,"placeholder":"Digite um subtítulo para o seu conteúdo (máximo 1200 caracteres)"}},{"name":"imagem","type":"String","length":"1000","null":false,"default":false,"form":{"label":"Endereço da Imagem Principal","type":"url","value":"","required":true,"placeholder":"Exemplo: https://persona360.com.br/img/logopersona.png"}},{"name":"conteudo","searchable":true,"type":"String","length":"5000","null":false,"default":false,"form":{"label":"Digite o conteudo do seu conteúdo","type":"text-area","value":"","required":true,"placeholder":"Digite seu conteúdo. Máximo de 5000 caracteres"}},{"name":"comentar","type":"Boolean","length":"","null":false,"default":false,"form":{"label":"Ativar comentários","type":"check-box","value":"1","required":true,"placeholder":false}},{"name":"publicar","type":"Boolean","length":"","null":false,"default":false,"searchable":false,"form":{"label":"Ativar publicação","type":"check-box","value":"1","required":true,"placeholder":false}},{"name":"privado","type":"Boolean","length":"","null":false,"default":false,"searchable":false,"form":{"label":"Privado (somente usuários autenticados podem ler)","type":"check-box","value":"1","required":true,"placeholder":false}},{"name":"dataInicioPublicacao","type":"Date","length":"","null":false,"default":"Date()","searchable":false,"form":{"label":"Data início da publicação (dia que entra no ar a partir das 00:00)","type":"Date","value":"","required":true,"placeholder":false}},{"name":"dataFinalPublicacao","type":"Date","length":"","null":true,"default":false,"searchable":false,"form":{"label":"Data final da publicação (dia que sai no ar a partir das 00:00) - Vazio deixa a publicação eterna","type":"Date","value":"","required":true,"placeholder":false}},{"name":"idPessoa","type":"Number","length":"","null":false,"default":false,"searchable":false,"form":false},{"name":"idEscola","type":"Number","length":"","null":true,"default":false,"searchable":false,"form":false},{"name":"idCurso","type":"Number","length":"","null":true,"default":false,"searchable":false,"form":false},{"name":"DataCad","type":"Date","length":"","null":false,"default":"Date()","searchable":false,"form":false},{"name":"isActive","type":"Boolean","length":"","null":false,"default":"1","searchable":false,"form":false}]});

  });

  module.exports = router;
  
  