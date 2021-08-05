
/*

Entity: Escola
Layer: model
Module: update.js

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
    
module.exports = (idTenant, params) => {

return `
    
BEGIN TRAN
UPDATE Escola SET
 nome = '${params.nome}'
,idPessoa = ${params.idPessoa}
,DataCad = '${params.DataCad}'
,isActive = ${params.isActive}
WHERE
    idTenant = ${idTenant}
AND idEscola = ${params.idEscola}

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