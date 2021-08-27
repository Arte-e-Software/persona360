function httpCall(req, payload, conductor) {

    // Abro a conexão com o servidor
    const socket = io()
    let data = {

        timestamp: new Date(),
        handshake: false,
        req: req,
        payload: payload,
        error: false

    }

    console.log('\nsent:\n')
    console.log(data)

    socket.emit('call', data)

    socket.on('call', data => {

        if (data.handshake) {
            
            // erro de fluxo em data.error
            conductor(socket, data)

        } else {

            alert('Erro de conexão', data.error, 'danger')

        }

    });
    
}