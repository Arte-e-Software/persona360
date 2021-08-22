
exports.Pessoa = ` 

-- Insere dados na tabela Pessoa

BEGIN TRAN

INSERT INTO Pessoa VALUES
(
'Administrador do Persona360'
,1
,'adm@persona360.com.br'
,'28d268b387886c7831c3090db44e01c76e211b477fec942e75ff8cdcf2a7308b'
,'GETDATE()'
,1
);

INSERT INTO Pessoa VALUES
(
'Usuário do Persona360'
,1
,'user@persona360.com.br'
,'62e6fac579e25e48db0a8a8cf2f2e4050f79ee811a62b8b7a5fab007c8b0ee02'
,'GETDATE()'
,1
);;
`