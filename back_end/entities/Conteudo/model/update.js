
/*

Entity: Conteudo
Layer: model
Module: update.js

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
Path: ./back_end/entities/Conteudo/update.js

*/
    
module.exports = params => {

return `
    
BEGIN TRAN
UPDATE Conteudo SET
 '${params.name}'
,${params.idTenant}
,'${params.tag}'
,'${params.subTitulo}'
,'${params.imagem}'
,'${params.conteudo}'
,${params.permitircomentarios}
,${params.publicar}
,${params.privado}
,'${params.dataInicioPublicacao}'
,'${params.dataFinalPublicacao}'
,${params.idPessoa}
,${params.idEscola}
,${params.idCurso}
,'${params.DataCad}'
,${params.isActive}
WHERE
    idConteudo = ${params.idConteudo}

IF @@ERROR = 0
BEGIN
SELECT 0 AS error
COMMIT TRAN
END

ELSE

BEGIN
SELECT @@ERROR as error
ROLLBACK TRAN
END   

`;

};