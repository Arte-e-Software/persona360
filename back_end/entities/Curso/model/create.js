
/*

Entity: Curso
Layer: model
Module: create.js

Namespace:
idCurso
nome
idTenant
idEscola
idPessoa
DataCad
isActive

Visit https://aes.tec.br 
GitHub https://github.com/Arte-e-Software/persona360.git
Author Pedro Silva aes.tec.br@gmail.com

2021 @ SP-Brasil

Building with aes.build v1
Path: ./back_end/entities/Curso/create.js

*/
    
module.exports = params => {

return `
    
BEGIN TRAN
INSERT INTO Curso VALUES
(
'${params.nome}'
,${params.idTenant}
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