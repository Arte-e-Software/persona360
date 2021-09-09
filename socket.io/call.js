const package = require('./package')

function call(io) {
    
    io.on('connection', socket => {

        socket.on('call', received => {

            if (received) {

                // #issue: desenvolver tratamentos de segurança
                // #issue: autenticação
                if (received.resource && received.payload && !received.error) {

                    switch (received.resource) {

                        case 'api':
                            require('./api')(socket, received)
                            break;

                        case 'sql':
                            require('./sql')(socket, received.payload)
                            break;

                        default:
                            let err = `método desconhecido: ${received.resource}`
                            socket.emit('call', package('sql', err, true))
                            break;
                    }

                } else {

                    let err = `pacote corrompido ${received}`
                    socket.emit('call', package(undefined, err, true))

                }

            } else {

                let err = `pedido rejeitado pelo servidor ${received}`
                socket.emit('call', package(undefined, err, true))

            }

        })

    })
}
module.exports = call