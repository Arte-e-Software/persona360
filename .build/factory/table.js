const fsCreateFile = require('../../back-end/utils/fs.create-file')
    , factory = require('./index')
    ;

module.exports = entity => {

    let fields = entity.fields

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

        , insert = entity.values.map((row) => {

            return `\nINSERT INTO ${entity.name} VALUES\n(\n` + row.map((value) => {

                let v = new String(value)
                    , n = new Number(value)
                    ;

                if (v.substring(0, 8) === 'GETDATE()' || !isNaN(n)) {

                    return `${value}\n`;

                } else {

                    return `'${value}'\n`;

                }

            }) + `);`

        }),

        template = {

            model: {
                create: require('./template/.mssql/template-create')(entity, columns),
                insert: require('./template/.mssql/template-insert')(entity, insert),
            },
            controller: {
                create: require('./template/.mssql/template-controller-create')(entity),
                insert: require('./template/.mssql/template-controller.insert')(entity)
            }

        };

    fsCreateFile(`${entity.dir}/model/.create-table.js`, template.model.create);
    fsCreateFile(`${entity.dir}/model/.insert-table.js`, template.model.insert);

    fsCreateFile(`${entity.dir}/controller/.create-table.js`, template.controller.create);
    fsCreateFile(`${entity.dir}/controller/.insert-table.js`, template.controller.insert);

    factory.log(`// _builder/factory/table.js // ${entity.name} {fields: ${entity.fields}}`);

};