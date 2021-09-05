function call(method, payload, callback) {

    // Abro a conexão com o servidor
    const socket = io()
    let error = !true

    // Emito a chamada
    error = false
    socket.emit('call',
        package(method, payload, error)
    )

    // Fico ouvindo o retorbo da chamada
    socket.on('call', received => {

        // Conexão estabelecida
        if (received.handshake) {

            // se erro lógico: callback lê call.error
            callback(socket, received)

        } else { 

            // erro de conexão
            alert('Erro', 'pedido rejeitado pelo servidor')

        }

    });

}