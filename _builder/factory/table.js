const fsCreateFile = require('../../back_end/utils/fs.create-file')
    , factory = {
        log: require('../factory/log')
    }
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
                create: require('../template/.mssql/template-create')(entity, columns),
                insert: require('../template/.mssql/template-insert')(entity, insert),
            },
            controller: {
                create: require('../template/.mssql/template-controller-create')(entity),
                insert: require('../template/.mssql/template-controller.insert')(entity)
            }

        };

    fsCreateFile(`${entity.db.dir}/model/create.js`, template.model.create);
    fsCreateFile(`${entity.db.dir}/model/insert.js`, template.model.insert);
    fsCreateFile(`${entity.db.dir}/controller/table-create.js`, template.controller.create);
    fsCreateFile(`${entity.db.dir}/controller/table-insert.js`, template.controller.insert);

    factory.log(`table: ${entity.name}, fields: ${entity.fields}`);

};