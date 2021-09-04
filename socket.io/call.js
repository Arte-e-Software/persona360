const outgoing = require('./outgoing')
const controller = require('./controller')

module.exports = io => {

    io.on('connection', socket => {

        socket.on('call', incoming => {

            if (incoming.method === 'post') { // desenvolver tratamento de segurança

                socket.emit('call',
                    outgoing('post', 'Pedido enviado para o controller', false)
                )

            } else {

                socket.emit('call',
                    outgoing('post', 'Pedido rejeitado pelo servidor', true)
                )
            }
        }
        )
    })
}