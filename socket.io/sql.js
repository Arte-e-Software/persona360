const package = require('./package')
const convert = require('./convert')
const error = require('./error')

module.exports = (socket, payload) => {

    let queryToParse = payload.query
        , format = payload.format.trim()
        , err = error(queryToParse)

    if (err) {

        let err = `query recusada ${queryToParse}`
        socket.emit('call', package('sql', err, true))

    } else {

        socket.emit('call', package('sql', 'Aguarde retorno do servidor', false))

        let parsedQuery = queryToParse

        const conn = require('../back-end/database/mssql/conn')
        const sql = require('mssql')

        let db = conn['aes'] // #issue: em desenvolvimento, virá do tenant

        sql.connect(db).then(() => { return sql.query(parsedQuery) })
            .then(result => {

                sql.close();
                let recordset = result.recordset
                    , payload = convert(recordset).to(format)

                socket.emit('call', package('sql', payload, false))

            })
            .catch(err => {

                sql.close();
                socket.emit('call', package('sql', err, true))

            })
        sql.on('error', err => {

            socket.emit('call', package('sql', err, true))

        })

    }

}
