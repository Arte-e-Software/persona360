
exports.Tenant = ` 

-- Insere dados na tabela Tenant

BEGIN TRAN

INSERT INTO Tenant VALUES
(
'Persona360'
,'adm.build@persona360.com.br'
,'28d268b387886c7831c3090db44e01c76e211b477fec942e75ff8cdcf2a7308b'
,'GETDATE()'
,1
);;
`