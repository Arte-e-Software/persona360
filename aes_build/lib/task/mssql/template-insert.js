module.exports = (entity, insert) => {

    return '\nexports.' + entity.name + ' = `' + ` 

-- Insere dados na tabela ${entity.name}

BEGIN TRAN
${insert.join('\n')};

IF @@ERROR = 0 
BEGIN
SELECT 0 AS err
COMMI TRAN
END
ELSE
BEGIN
SELECT @@ERROR as err
ROLLBACK TRAN
END
`+'`'

};