const sql = require('mssql');

module.exports = async (db, query, res) => {

  sql.connect(db).then(() => {

    return sql.query(query)

  }).then(result => {

    sql.close()
    typeof (res) === 'object' ? res.status(200).send(result) : res(result);

  }).catch(err => {

    sql.close()
    res.status(500).send(err)

  })

  sql.on('error', err => {

    sql.close()
    res.status(500).send(err)

  })
}