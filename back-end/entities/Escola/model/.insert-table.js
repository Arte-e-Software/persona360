
exports.Escola = ` 

-- Insere dados na tabela Escola

BEGIN TRAN

INSERT INTO Escola VALUES
(
'Escola Persona360'
,1
,'adm.build@persona360.com.br'
,1
,'GETDATE()'
,true
);;
`