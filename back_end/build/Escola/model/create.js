
/*

Entity: Escola
Layer: model
Module: create.js

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
Path: ./back_end/build/Escola/create.js

*/
    
module.exports = params => {

return `
    
BEGIN TRAN
INSERT INTO Escola VALUES
(
'${params.nome}'
,${params.idTenant}
,${params.idPessoa}
,'${params.DataCad}'
,${params.isActive}
);

IF @@ERROR = 0
BEGIN
SELECT @@IDENTITY AS idEscola
COMMIT TRAN
END

ELSE

BEGIN
SELECT NULL AS idEscola
ROLLBACK TRAN
END   

`;

};