// Exponho o módulo para o servidor
module.exports = server => {

    // Inicio o serviço socket.io
    const io = require('socket.io')(server);

    // Registro dos clientes do socket
    require('./chat')(io);
    require('./httpCall')(io);

};