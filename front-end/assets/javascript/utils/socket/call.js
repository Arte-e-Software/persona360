function call(resource, payload, callback) {

    // Abro a conexão com o servidor
    const socket = io()
    let error = !true

    // Emito a chamada
    socket.emit('call',
        package(resource, payload)
    )

    // Fico ouvindo o retorbo da chamada
    socket.on('call', received => {

        // Conexão estabelecida
        if (received.handshake) {

            // se erro lógico: tratado no callback
            callback(received)

        } else { 

            // erro de conexão
            alert('Erro', 'pedido rejeitado pelo servidor')

        }

    });

}