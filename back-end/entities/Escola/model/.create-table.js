
exports.exports = ` 
    
-- Cria uma tabela chamada 'Escola'

BEGIN TRAN
IF OBJECT_ID('Escola', 'U') IS NOT NULL
DROP TABLE Escola
GO

-- Cria a tabela
CREATE TABLE Escola
(
idEscola INT IDENTITY(1,1) NOT NULL PRIMARY KEY
,name [VARCHAR](300) NOT NULL
,idTenant [INT] NOT NULL
,idPessoa [INT] NOT NULL
,DataCad [DATETIME] NOT NULL
,isActive [BIT] NOT NULL
);
`;
