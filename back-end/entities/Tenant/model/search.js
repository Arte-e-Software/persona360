
/*

Entity: Tenant
Layer: model
Module: search.js

Namespace:
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
Path: ./back_end/entities/Tenant/search.js

*/

//idPessoa chega em params.idPessoa, mas ainda não estou usandom//** desconsidere esse comentário para Entity = Pessoa

module.exports = params => {

return `

SELECT
 idTenant
,name
,email
,password
,DataCad
,isActive
FROM
Tenant
WHERE 
  (name like '%${params.pesq}%'
OR email like '%${params.pesq}%')
;

`};