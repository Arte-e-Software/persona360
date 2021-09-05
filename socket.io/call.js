const package = require('./package')

function call(io) {
    io.on('connection', socket => {
        socket.on('call', received => {
            if (received) {
                // desenvolver tratamento de segurança
                if (received.method && received.payload && !received.error) {
                    require('./api')(socket, received)
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