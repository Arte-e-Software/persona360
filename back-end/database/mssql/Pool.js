const { response } = require('express');
const sql = require('mssql');

module.exports = (db, query, res) => {

  sql.connect(db).then(() => {

    return sql.query(query)

  }).then(result => {

    sql.close()
    res.status(200).send(result)

  }).catch(err => {

    sql.close()
    res.status(500).send(err)

  })

  sql.on('error', err => {

    res.status(500).send(err)

  })
}