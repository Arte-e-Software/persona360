
/*

Entity: Curso
Layer: model
Module: search.js

Namespace:
idCurso
name
idTenant
idEscola
idPessoa
DataCad
isActive

Visit https://aes.tec.br 
GitHub https://github.com/Arte-e-Software/persona360.git
Author Pedro Silva aes.tec.br@gmail.com

2021 @ SP-Brasil

Building with aes.build v1
Path: ./back_end/entities/Curso/search.js

*/

//idPessoa chega em params.idPessoa, mas ainda não estou usandom//** desconsidere esse comentário para Entity = Pessoa

module.exports = params => {

return `

SELECT
 idCurso
,name
,idTenant
,idEscola
,idPessoa
,DataCad
,isActive
FROM
Curso
WHERE 
  (name like '%${params.pesq}%'
OR isActive like '%${params.pesq}%')
;

`};