
/*

Entity: Pessoa
Layer: model
Module: create.js

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
Path: ./back_end/entities/Pessoa/create.js

*/

module.exports = params => {

return `
    
BEGIN TRAN
INSERT INTO Pessoa VALUES
(
'${params.name}'
,${params.idTenant}
,'${params.email}'
,'${params.password}'
,'${params.DataCad}'
,${params.isActive}
);

IF @@ERROR = 0
BEGIN
SELECT @@IDENTITY AS idPessoa
COMMIT TRAN
END

ELSE

BEGIN
SELECT NULL AS idPessoa
ROLLBACK TRAN
END   

`;

};