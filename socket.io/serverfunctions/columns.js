
const columns = entity => {

  let fields = entity.fields

    , translate = {
      js: ['String', 'Date', 'Boolean', 'Number'],
      sql: ['VARCHAR', 'DATETIME', 'BIT', 'Float']
    }

    , arrColumns = fields.map((field) => {

      // vou precisar desses valores para gravar a entidade na table entity
      let name = field.name
        //, privacy = field.privacy
        , type = translate.sql[translate.js.indexOf(field.type)]
        , length = field.length
        , nullable = field.nullnullable
        //, searchable = field.searchable
        , isForeingKey = name.substring(0, 3) === 'id_'

      if (isForeingKey) { type = 'INT' }

      if (length) { length = `(${length})` } else { length = '' }

      if (nullable) { nullable = 'NULL' } else { nullable = 'NOT NULL' }

      return `${field.name} [${type}]${length} ${nullable}\n`

    })

  console.log(arrColumns)
  return arrColumns

}

module.exports = columns