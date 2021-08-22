
/*

Entity: Conteudo
Layer: model
Module: read.js

Namespace:
idConteudo
name
idTenant
tag
subtitulo
imagem
conteudo
permitirComentarios
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
Path: ./back_end/entities/Conteudo/read.js

*/

//idPessoa chega em params.idPessoa, mas ainda não estou usandom//** desconsidere esse comentário para Entity = Pessoa

module.exports = params => {

return `

SELECT
 idConteudo
,name
,idTenant
,tags
,subTitulo
,imagem
,conteudo
,permitirComentarios
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
    idConteudo = ${params.idConteudo}
;

`};