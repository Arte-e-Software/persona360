
/*

Entity: Conteudo
Layer: model
Module: create.js

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
Path: ./back_end/entities/Conteudo/create.js

*/

module.exports = params => {

return `
    
BEGIN TRAN
INSERT INTO Conteudo VALUES
(
'${params.name}'
,${params.idTenant}
,'${params.tags}'
,'${params.subTitulo}'
,'${params.imagem}'
,'${params.conteudo}'
,${params.permitirComentarios}
,${params.publicar}
,${params.privado}
,'${params.dataInicioPublicacao}'
,'${params.dataFinalPublicacao}'
,${params.idPessoa}
,${params.idEscola}
,${params.idCurso}
,'${params.DataCad}'
,${params.isActive}
);

IF @@ERROR = 0
BEGIN
SELECT @@IDENTITY AS idConteudo
COMMIT TRAN
END

ELSE

BEGIN
SELECT NULL AS idConteudo
ROLLBACK TRAN
END   

`;

};