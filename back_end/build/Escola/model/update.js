
/*

Entity: Escola
Layer: model
Module: update.js

Namespace:
idEscola
nome
idTenant
idPessoa
DataCad
isActive

Visit https://aes.tec.br 
GitHub https://github.com/Arte-e-Software/persona360.git
Author Pedro Silva aes.tec.br@gmail.com

2021 @ SP-Brasil

Building with aes.build v1
Path: ./back_end/build/Escola/update.js

*/
    
module.exports = params => {

return `
    
BEGIN TRAN
UPDATE Escola SET
 '${params.nome}'
,${params.idTenant}
,${params.idPessoa}
,'${params.DataCad}'
,${params.isActive}
WHERE
    idEscola = ${params.idEscola}

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