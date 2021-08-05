
/*

Entity: Escola
Layer: model
Module: search.js

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
    
//idPessoa chega em params.idPessoa, mas ainda não estou usandom//** desconsidere esse comentário para Entity = Pessoa

module.exports = (idTenant, params) => {

return `

SELECT
 idEscola
,nome
,idPessoa
,DataCad
,isActive
FROM
Escola
WHERE 
  (nome like '%${params.pesq}%'
OR isActive like '%${params.pesq}%')
AND idTenant = ${idTenant};

`};