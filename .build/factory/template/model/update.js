module.exports = data => {

    let   fields = require('./_convertFieldsToReqParams')(data.entity.fields)
        , model = data.comment + '\n'
        , where = '    id'+ data.entity.name +' = ${params.id'+ data.entity.name +'}'
        ;

    model += 'module.exports = params => {\n\nreturn `';
    model += `
    
BEGIN TRAN
UPDATE ${data.entity.name} SET
 ${fields}WHERE
${where}

IF @@ERROR = 0
BEGIN
SELECT 0 AS error
COMMIT TRAN
END

ELSE

BEGIN
SELECT @@ERROR as error
ROLLBACK TRAN
END   
`;

    return model + '\n`;\n\n};';

};