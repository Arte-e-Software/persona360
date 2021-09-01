function call(req, payload, conductor) {

    // Abro a conexão com o servidor
    const socket = io()

    // Consolido o pacote de dados
    let data = {

        timestamp: new Date(),
        handshake: false,
        req: req,
        payload: payload,
        error: false

    }

    // Emito a chamada
    socket.emit('call', data)

    // Fico ouvindo o retorbo da chamada
    socket.on('call', data => {

        // Conexão estabelecida
        if (data.handshake) {

            // se ocorreu erro de fluxo será tratado pelo conductor data.error
            conductor(socket, data)

        } else {

            // erro de conexão
            alert('Erro de conexão', data.error, 'danger')

        }

    });

}