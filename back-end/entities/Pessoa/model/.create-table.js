
exports.exports = ` 
    
-- Cria uma tabela chamada 'Pessoa'

BEGIN TRAN
IF OBJECT_ID('Pessoa', 'U') IS NOT NULL
DROP TABLE Pessoa
GO

-- Cria a tabela
CREATE TABLE Pessoa
(
idPessoa INT IDENTITY(1,1) NOT NULL PRIMARY KEY
,name [VARCHAR](300) NOT NULL
,idTenant [INT] NOT NULL
,email [VARCHAR](300) NOT NULL
,password [VARCHAR](62) NOT NULL
,DataCad [DATETIME] NOT NULL
,isActive [BIT] NOT NULL
);
`;
