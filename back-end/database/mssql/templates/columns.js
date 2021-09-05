
function columns(entity){

    let fields = entity.fields

        , translate = {
            js: ['String', 'Date', 'Boolean', 'Number'],
            sql: ['VARCHAR', 'DATETIME', 'BIT', 'Float']
        }

        , arrColumns = fields.map((field) => {

            let name = field.name
                , nullable = field.null
                , length = field.length
                , type = translate.sql[translate.js.indexOf(field.type)]
                , isForeingKey = name.substring(0, 2) === 'id'

            if (isForeingKey) { type = 'INT' }

            if (length) { length = `(${length})` } else { length = '' }

            if (nullable) { nullable = 'NULL' } else { nullable = 'NOT NULL' }

            return `${field.name} [${type}]${length} ${nullable}\n`

        })

    return arrColumns

}

module.exports = columns