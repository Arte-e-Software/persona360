
/*

Entity: Curso
Layer: model
Module: create.js

Namespace --------------------/

idCurso
idTenant
nome
idEscola
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
    
module.exports = (idTenant, params) => {

return `
    
BEGIN TRAN
INSERT INTO Curso VALUES
(
${idTenant}
,'${params.nome}'
,${params.idEscola}
,${params.idPessoa}
,'${params.DataCad}'
,${params.isActive}
);

IF @@ERROR = 0
BEGIN
SELECT @@IDENTITY AS idCurso
COMMIT TRAN
END

ELSE

BEGIN
SELECT NULL AS idCurso
ROLLBACK TRAN
END   

`;

};