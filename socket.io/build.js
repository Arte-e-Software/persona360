module.exports = io => {

    io.on('connection', (socket) => {
        
        // quando o cliente entra no /adm ele emite a mensagem de que está online
        // esse módulo ouve e executa um callback
        socket.on('entrei no adm', (data) => {
        
            // we tell the client to execute 'new message'
            socket.broadcast.emit('new message', {
                username: socket.username,
                message: data
            });
        });

}