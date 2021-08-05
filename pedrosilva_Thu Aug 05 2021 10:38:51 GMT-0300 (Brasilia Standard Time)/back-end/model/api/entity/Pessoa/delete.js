
/*

Entity: Pessoa
Layer: model
Module: delete.js

Namespace --------------------/

idPessoa
idTenant
nome
email
senha
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
    
//idPessoa chega em params.idPessoa, mas ainda não estou usando** desconsidere esse comentário para Entity = Pessoa

module.exports = (idTenant, params) => {

return `
    
BEGIN TRAN
UPDATE Pessoa SET
isActive=0 
WHERE idTenant = ${idTenant} AND idPessoa = ${params.idPessoa};

IF @@ERROR = 0
BEGIN
SELECT 0 AS error
COMMIT TRAN
END

ELSE

BEGIN
SELECT @@ERROR AS error
ROLLBACK TRAN
END   

`;

};