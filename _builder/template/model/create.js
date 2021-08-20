module.exports = data => {

    let   model = data.comment + '\n'
        , fields = require('./_convertFieldsToReqParams')(data.entity.fields)
        ;

    model += 'module.exports = params => {\n\nreturn `';
    model += `
    
BEGIN TRAN
INSERT INTO ${data.entity.name} VALUES
(
${fields});

IF @@ERROR = 0
BEGIN
SELECT @@IDENTITY AS id${data.entity.name}
COMMIT TRAN
END

ELSE

BEGIN
SELECT NULL AS id${data.entity.name}
ROLLBACK TRAN
END   
`;

    return model + '\n`;\n\n};';

};