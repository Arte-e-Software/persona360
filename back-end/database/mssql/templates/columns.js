module.exports = entity => {

  let translate = {
    js: ['String', 'Date', 'Boolean', 'Number'],
    sql: ['VARCHAR', 'DATETIME', 'BIT', 'Float']
  }
    , columns = entity.fields.map(field => {

      return field

    })

  return columns

}