
exports.exports = ` 
    
-- Cria uma tabela chamada 'Tenant'

BEGIN TRAN
IF OBJECT_ID('Tenant', 'U') IS NOT NULL
DROP TABLE Tenant
GO

-- Cria a tabela
CREATE TABLE Tenant
(
idTenant INT IDENTITY(1,1) NOT NULL PRIMARY KEY
,name [VARCHAR](300) NOT NULL
,email [VARCHAR](300) NOT NULL
,password [VARCHAR](62) NOT NULL
,DataCad [DATETIME] NOT NULL
,isActive [BIT] NOT NULL
);
`;
