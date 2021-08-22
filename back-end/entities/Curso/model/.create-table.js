
exports.exports = ` 
    
-- Cria uma tabela chamada 'Curso'

BEGIN TRAN
IF OBJECT_ID('Curso', 'U') IS NOT NULL
DROP TABLE Curso
GO

-- Cria a tabela
CREATE TABLE Curso
(
idCurso INT IDENTITY(1,1) NOT NULL PRIMARY KEY
,name [VARCHAR](300) NOT NULL
,idTenant [INT] NOT NULL
,idEscola [INT] NOT NULL
,idPessoa [INT] NOT NULL
,DataCad [DATETIME] NOT NULL
,isActive [BIT] NOT NULL
);
`;
