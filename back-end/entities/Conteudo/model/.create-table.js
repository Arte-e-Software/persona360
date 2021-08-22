
exports.exports = ` 
    
-- Cria uma tabela chamada 'Conteudo'

BEGIN TRAN
IF OBJECT_ID('Conteudo', 'U') IS NOT NULL
DROP TABLE Conteudo
GO

-- Cria a tabela
CREATE TABLE Conteudo
(
idConteudo INT IDENTITY(1,1) NOT NULL PRIMARY KEY
,name [VARCHAR](1000) NOT NULL
,idTenant [INT] NOT NULL
,tags [VARCHAR](1000) NOT NULL
,subTitulo [VARCHAR](1200) NOT NULL
,imagem [VARCHAR](1000) NOT NULL
,conteudo [VARCHAR](5000) NOT NULL
,permitirComentarios [BIT] NOT NULL
,publicar [BIT] NOT NULL
,privado [BIT] NOT NULL
,dataInicioPublicacao [DATETIME] NOT NULL
,dataFinalPublicacao [DATETIME] NULL
,idPessoa [INT] NOT NULL
,idEscola [INT] NULL
,idCurso [INT] NULL
,DataCad [DATETIME] NOT NULL
,isActive [BIT] NOT NULL
);
`;
