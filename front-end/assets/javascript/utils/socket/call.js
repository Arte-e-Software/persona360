function call(method, payload, controller) {

    // Abro a conexão com o servidor
    const socket = io()

    // Emito a chamada
    socket.emit('call', outgoing(method, payload, false))

    // Fico ouvindo o retorbo da chamada
    socket.on('call', incoming => {

        // Conexão estabelecida
        if (incoming.handshake) {

            // se erro lógico: controller lê call.error
            controller.then(socket, incoming)

        } else {

            // erro de conexão
            controller.catch(socket, incoming)

        }

    });

}