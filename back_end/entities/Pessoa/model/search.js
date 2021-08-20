
/*

Entity: Pessoa
Layer: model
Module: search.js

Namespace:
idPessoa
idTenant
name
email
senha
DataCad
isActive

Visit https://aes.tec.br 
GitHub https://github.com/Arte-e-Software/persona360.git
Author Pedro Silva aes.tec.br@gmail.com

2021 @ SP-Brasil

Building with aes.build v1
Path: ./back_end/entities/Pessoa/search.js

*/

//idPessoa chega em params.idPessoa, mas ainda não estou usandom//** desconsidere esse comentário para Entity = Pessoa

module.exports = params => {

return `

SELECT
 idPessoa
,name
,idTenant
,email
,password
,DataCad
,isActive
FROM
Pessoa
WHERE 
  (name like '%${params.pesq}%'
OR email like '%${params.pesq}%')
;

`};