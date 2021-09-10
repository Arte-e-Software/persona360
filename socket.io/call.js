const package = require('./package')

function call(io) {
    
    io.on('connection', socket => {

        socket.on('call', received => {

            if (received) {

                // #issue: desenvolver tratamentos de segurança
                // #issue: autenticação
                if (received.resource && received.payload) {

                    let resource = received.resource
                        , payload = received.payload

                        // para efeito de documentação e depuração
                        , query = payload.query
                        , format = payload.format
                        , status = payload.status
                        , element = payload.element
                        , btn = payload.btn
                    
                    switch (resource) {

                        case 'api':
                            require('./api')(socket, received)
                            break;

                        case 'sql':
                        
                            require('./sql')(socket, payload)
                            break;

                        default:
                            payload.status = `Recurso invállido: ${resource}`
                            socket.emit('call', package('sql', payload, true))
                            break;
                    }

                } else {

                    payload.status = `pacote corrompido ${received}`
                    socket.emit('call', package(undefined, payload, true))

                }

            } else {

                payload.status = `package(${received}) chegou vazio ao servidor`
                socket.emit('call', package(undefined, payload, true))

            }

        })

    })
}
module.exports = call