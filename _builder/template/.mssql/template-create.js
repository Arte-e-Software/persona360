module.exports = (entity, columns) => {

    return '\nexports.' + entity.name + ' = `' + ` 
    
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
`+ '`;\n'

};