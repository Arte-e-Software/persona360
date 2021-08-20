
/*

Entity: Pessoa
Layer: model
Module: delete.js

Namespace:
idPessoa
idTenant
name
email
senha
DataCad
isActive

Visit https://aes.tec.br 
GitHub https://github.com/Arte-e-Software/persona360.git
Author Pedro Silva aes.tec.br@gmail.com

2021 @ SP-Brasil

Building with aes.build v1
Path: ./back_end/entities/Pessoa/delete.js

*/

//idPessoa chega em params.idPessoa, mas ainda não estou usando** desconsidere esse comentário para Entity = Pessoa

module.exports = params => {

return `
    
BEGIN TRAN
UPDATE Pessoa SET
isActive=0 
WHERE idPessoa = ${params.idPessoa};

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