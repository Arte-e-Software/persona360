const package = require('./package')

function call(io) {
    io.on('connection', socket => {

        socket.on('call', received => {

            if (received) {

                // desenvolver tratamento de segurança
                if (received.method && received.payload && !received.error) {

                    switch (received.method) {
                        case 'api':
                            require('./api')(socket, received)
                            break;

                        case 'sql':

                            // tem que melhorar MUITO isso
                            let queryToParse = received.payload
                                , error = queryToParse.toUpperCase().substring(0,6) != 'SELECT'

                            if (error) {

                                socket.emit('call', package('sql', `query recusada ${queryToParse}`, true))

                            } else {

                                let forbidden = [

                                    'drop',
                                    'create',
                                    'exec',
                                    'update',
                                    'delete',
                                    'insert',
                                    'sp_'

                                ]

                                error = forbidden.indexOf(queryToParse) > 0

                                if (!error) {

                                    let parsedQuery = queryToParse

                                    const conn = require('../back-end/database/mssql/conn')
                                    const sql = require('mssql')

                                    let query = parsedQuery
                                        , db = conn['aes'] // em desenvolvimento, virá do tenant

                                    sql.connect(db).then(() => { return sql.query(query) })
                                        .then(result => {

                                            sql.close();
                                            socket.emit('call', package('sql', result, false))

                                        })
                                        .catch(err => {

                                            sql.close();
                                            socket.emit('call', package('sql', err, true))

                                        })
                                    sql.on('error', err => {

                                        socket.emit('call', package('sql', err, true))

                                    })

                                } else {

                                    socket.emit('call', package('sql', `query recusada`, true))

                                }

                            }
                            break;

                        default:
                            socket.emit('call', package(received.method, `método desconhecido: ${received.method}`, true))
                            break;
                    }

                } else {

                    socket.emit('call', package(undefined, 'pacote corrompido', true))

                }

            } else {

                socket.emit('call', package(undefined, 'pedido rejeitado pelo servidor', true))

            }

        })

    })
}
module.exports = call