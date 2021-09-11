const package = require('./package')
const convert = require('./convert')
const error = require('./error')

module.exports = (socket, payload) => {

    let queryToParse = payload.query
        , format = payload.format.trim()
        , err = error(queryToParse)

    if (err) {

        payload.status = `query recusada ${queryToParse}`
        socket.emit('call', package('sql', payload, true))

    } else {

        // feedback para o cliente, reenvio o payload com o status: waiting
        socket.emit('call', package('sql', payload, false))

        let parsedQuery = queryToParse
            , element = payload.element
            , btn = payload.btn

        const conn = require('../back-end/database/mssql/conn')
        const sql = require('mssql')

        let db = conn['aes'] // #issue: em desenvolvimento, virá do tenant

        sql.connect(db).then(() => { return sql.query(parsedQuery) })
            .then(result => {

                sql.close();
                let recordset = result.recordset
                    , payload = {
                        "query": parsedQuery,
                        "format": format,
                        "element": element,
                        "btn": btn,
                        "status": convert(recordset).to(format)
                    }

                socket.emit('call', package('sql', payload, false))

            })
            .catch(err => {
              
                sql.close();

                let element = payload.element
                    , btn = payload.btn
                    , status = JSON.stringify(err.originalError.info)

                payload = {
                    "query": parsedQuery,
                    "format": format,
                    "element": element,
                    "btn": btn,
                    "status": status
                }
                socket.emit('call', package('sql', payload, true))

            })
        sql.on('error', err => {

            console.log('sql.on', err)

            let element = payload.element
                , btn = payload.btn

            payload = {
                "query": queryToParse,
                "format": format,
                "element": element,
                "btn": btn,
                "status": err
            }
            socket.emit('call', package('sql', payload, true))

        })

    }

}
