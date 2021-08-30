function build(socket, data) {

    console.log('\nreceived:\n')
    console.log(data)

    let req = ''

    socket.emit('call', {

        timestamp: new Date(),
        handshake: true,
        req: req,
        payload: { caller: document.baseURI },
        error: false

    })

}