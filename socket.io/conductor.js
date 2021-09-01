module.exports = (socket, data) => {

    let res = 'Pedido recebido pelo conductor'
        , error = false
        ;

    socket.emit('call', {

        timestamp: new Date(),
        handshake: true,
        res: res,
        payload: data.payload.entity,
        error: error
    
    })

}