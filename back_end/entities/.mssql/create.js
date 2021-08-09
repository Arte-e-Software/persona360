
exports.Tenant = ` 
    
-- Cria uma tabela chamada 'Tenant'

BEGIN TRAN
IF OBJECT_ID('Tenant', 'U') IS NOT NULL
DROP TABLE Tenant
GO

-- Cria a tabela
CREATE TABLE Tenant
(
idTenant INT IDENTITY(1,1) NOT NULL PRIMARY KEY
,nome [VARCHAR](300) NOT NULL
,email [VARCHAR](300) NOT NULL
,senha [VARCHAR](62) NOT NULL
,DataCad [DATETIME] NOT NULL
,isActive [BIT] NOT NULL
);

IF @@ERROR == 0
BEGIN
SELECT 0 AS err
COMMIT TRAN
END
ELSE
BEGIN
SELECT @@ERROR AS err
ROLLBACK TRAN
END
`;

exports.Escola = ` 
    
-- Cria uma tabela chamada 'Escola'

BEGIN TRAN
IF OBJECT_ID('Escola', 'U') IS NOT NULL
DROP TABLE Escola
GO

-- Cria a tabela
CREATE TABLE Escola
(
idEscola INT IDENTITY(1,1) NOT NULL PRIMARY KEY
,nome [VARCHAR](300) NOT NULL
,idTenant [INT] NOT NULL
,idPessoa [INT] NOT NULL
,DataCad [DATETIME] NOT NULL
,isActive [BIT] NOT NULL
);

IF @@ERROR == 0
BEGIN
SELECT 0 AS err
COMMIT TRAN
END
ELSE
BEGIN
SELECT @@ERROR AS err
ROLLBACK TRAN
END
`;

exports.Curso = ` 
    
-- Cria uma tabela chamada 'Curso'

BEGIN TRAN
IF OBJECT_ID('Curso', 'U') IS NOT NULL
DROP TABLE Curso
GO

-- Cria a tabela
CREATE TABLE Curso
(
idCurso INT IDENTITY(1,1) NOT NULL PRIMARY KEY
,nome [VARCHAR](300) NOT NULL
,idTenant [INT] NOT NULL
,idEscola [INT] NOT NULL
,idPessoa [INT] NOT NULL
,DataCad [DATETIME] NOT NULL
,isActive [BIT] NOT NULL
);

IF @@ERROR == 0
BEGIN
SELECT 0 AS err
COMMIT TRAN
END
ELSE
BEGIN
SELECT @@ERROR AS err
ROLLBACK TRAN
END
`;

exports.Conteudo = ` 
    
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
,tag [VARCHAR](1000) NOT NULL
,subTitulo [VARCHAR](1200) NOT NULL
,imagem [VARCHAR](1000) NOT NULL
,conteudo [VARCHAR](5000) NOT NULL
,permitircomentarios [BIT] NOT NULL
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

IF @@ERROR == 0
BEGIN
SELECT 0 AS err
COMMIT TRAN
END
ELSE
BEGIN
SELECT @@ERROR AS err
ROLLBACK TRAN
END
`;

exports.Pessoa = ` 
    
-- Cria uma tabela chamada 'Pessoa'

BEGIN TRAN
IF OBJECT_ID('Pessoa', 'U') IS NOT NULL
DROP TABLE Pessoa
GO

-- Cria a tabela
CREATE TABLE Pessoa
(
idPessoa INT IDENTITY(1,1) NOT NULL PRIMARY KEY
,nome [VARCHAR](300) NOT NULL
,idTenant [INT] NOT NULL
,email [VARCHAR](300) NOT NULL
,senha [VARCHAR](62) NOT NULL
,DataCad [DATETIME] NOT NULL
,isActive [BIT] NOT NULL
);

IF @@ERROR == 0
BEGIN
SELECT 0 AS err
COMMIT TRAN
END
ELSE
BEGIN
SELECT @@ERROR AS err
ROLLBACK TRAN
END
`;
