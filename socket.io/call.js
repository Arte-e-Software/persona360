module.exports = io => {

    io.on('connection', socket => {

        let res = ''
            , error = true

        socket.on('call', data => {
            
            // Nesse ponto do código eu faço um proxy de chamadas
           if (data.payload.caller === "http://localhost/adm") {

                let entity = require('../back-end/config/config.json').entity
                res = 'Pedido enviado para o controller'
                error = false

                socket.emit('call', {

                    timestamp: new Date(),
                    handshake: true,
                    res: res,
                    payload: entity,
                    error: error

                })

                console.log(entity)

            } else {

                res = 'A requisição foi rejeitada pelo servidor'
                error = true

                socket.emit('call', {

                    timestamp: new Date(),
                    handshake: true,
                    res: res,
                    error: error

                })
            }

        })

        socket.on('disconnect', () => {

            socket.emit('a user left', { data: { msg: 'bye' } })

        })

    })

}