const createFile = require('../fs.create-file');

module.exports = (entity, success, error) => {

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

           return `\nINSERT INTO ${entity.name} VALUES\n(\n`+ row.map((value) => {

                let v = new String(value)
                    , n = new Number(value)
                    ;

                if (v.substring(0, 8) === 'GETDATE()' || !isNaN(n)) {

                    return `${value}\n`;

                } else {

                    return `'${value}'\n`;

                }

            })+ `);`
            
        }), 
        
        template = {

            create: require('./template-create')(entity, columns),
            insert: require('./template-insert')(entity, insert)

        };

    createFile(`${entity.db.dir}/create.js`, template.create, success, error);

    createFile(`${entity.db.dir}/insert.js`, template.insert, success, error);

};