module.exports = (entity, columns) => {

    return '\nexports.exports = `' + ` 
    
-- Cria uma tabela chamada '${entity.name}'

BEGIN TRAN
IF OBJECT_ID('${entity.name}', 'U') IS NOT NULL
DROP TABLE ${entity.name}
GO

-- Cria a tabela
CREATE TABLE ${entity.name}
(
id${entity.name} INT IDENTITY(1,1) NOT NULL PRIMARY KEY
,${columns});
`+ '`;\n'

};