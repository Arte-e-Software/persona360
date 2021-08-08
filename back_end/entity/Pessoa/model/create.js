
/*

Entity: Pessoa
Layer: model
Module: create.js

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
Path: pedrosilva_Sat Aug 07 2021 19:35:47 GMT-0300 (Brasilia Standard Time)

*/
    
module.exports = params => {

return `
    
BEGIN TRAN
INSERT INTO Pessoa VALUES
(
'${params.nome}'
,'${params.email}'
,'${params.senha}'
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