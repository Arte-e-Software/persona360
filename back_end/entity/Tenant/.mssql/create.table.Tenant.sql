
    
-- Cria uma tabela chamada 'Tenant'

-- Se existir, DROP na tabela (perde todos os dados)
IF OBJECT_ID('Tenant', 'U') IS NOT NULL
SELECT * INTO Tenant_aes_build_backup FROM Tenant

IF OBJECT_ID('Tenant', 'U') IS NOT NULL
DROP TABLE Tenant
GO

-- Cria a tabela
CREATE TABLE Tenant
(
 idTenant INT IDENTITY(1,1) NOT NULL PRIMARY KEY
,idTenant INT NOT NULL
,nome [VARCHAR](300) NOT NULL
,email [VARCHAR](300) NOT NULL
,senha [VARCHAR](62) NOT NULL
,DataCad [DATETIME] NOT NULL
,isActive [BIT] NOT NULL

);
GO
