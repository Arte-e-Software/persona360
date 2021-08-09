
/*

Entity: Conteudo
Layer: model
Module: search.js

Namespace:
idConteudo
nome
idTenant
tag
subtitulo
imagem
conteudo
permitircomentarios
publicar
privado
dataInicioPublicacao
dataFinalPublicacao
idPessoa
idEscola
idCurso
DataCad
isActive

Visit https://aes.tec.br 
GitHub https://github.com/Arte-e-Software/persona360.git
Author Pedro Silva aes.tec.br@gmail.com

2021 @ SP-Brasil

Building with aes.build v1
Path: ./back_end/entities/Conteudo/search.js

*/
    
//idPessoa chega em params.idPessoa, mas ainda não estou usandom//** desconsidere esse comentário para Entity = Pessoa

module.exports = params => {

return `

SELECT
 idConteudo
,name
,idTenant
,tag
,subTitulo
,imagem
,conteudo
,permitircomentarios
,publicar
,privado
,dataInicioPublicacao
,dataFinalPublicacao
,idPessoa
,idEscola
,idCurso
,DataCad
,isActive
FROM
Conteudo
WHERE 
  (name like '%${params.pesq}%'
OR tag like '%${params.pesq}%'
OR subTitulo like '%${params.pesq}%'
OR conteudo like '%${params.pesq}%')
;

`};