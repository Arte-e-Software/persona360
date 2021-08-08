const createFile = require('../fs.create-file');

module.exports = (entity, success, error) => {

    let   fields = entity.fields
        , translate = {
            js: ['String', 'Date', 'Boolean', 'Number'],
            sql: ['VARCHAR', 'DATETIME', 'BIT', 'Float']
        }
        , columns = fields.map((field) => {

            let name = field.name
                , nullable = field.null
                , length = field.length
                , type = translate.sql[translate.js.indexOf(field.type)]
                , isForeingKey = name.substring(0, 2) === 'id'
                ;

            if (isForeingKey) { type = 'INT'; } 

            if (length) { length = `(${length})`; } else { length = ''; };

            if (nullable) { nullable = 'NULL'; } else { nullable = 'NOT NULL'; };

            return `${field.name} [${type}]${length} ${nullable}\n`;

        })
        , values = entity.buildvalues.map((value)=>{ return `'${value}'\n` })
        //, buildvalues = bv.pop()
        , template = {
            create: `
    
-- Cria uma tabela chamada '${entity.name}'

IF OBJECT_ID('${entity.name}', 'U') IS NOT NULL
DROP TABLE ${entity.name}
GO

-- Cria a tabela
CREATE TABLE ${entity.name}
(
 id${entity.name} INT IDENTITY(1,1) NOT NULL PRIMARY KEY
,${columns}
);
GO
`
, insert: `
-- Insere dados iniciais na tabela ${entity.name}
INSERT INTO ${entity.name} VALUES 
(
${values}
);
`
}
;

    createFile(`${entity.db.dir}/create.entities.sql`, template.create, success, error);
    createFile(`${entity.db.dir}/populate.entities.sql`, template.insert, success, error);

};