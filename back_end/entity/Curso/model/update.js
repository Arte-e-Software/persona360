
/*

Entity: Curso
Layer: model
Module: update.js

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
Path: pedrosilva_Sat Aug 07 2021 19:35:47 GMT-0300 (Brasilia Standard Time)

*/
    
module.exports = params => {

return `
    
BEGIN TRAN
UPDATE Curso SET
 nome = '${params.nome}'
,idEscola = ${params.idEscola}
,idPessoa = ${params.idPessoa}
,DataCad = '${params.DataCad}'
,isActive = ${params.isActive}
WHERE
    idCurso = ${params.idCurso}

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