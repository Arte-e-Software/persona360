// Exponho o módulo para o servidor
module.exports = server => {

    // Inicio o serviço socket.io
    const io = require('socket.io')(server);

    /**
     * Inicio os módulos que usam o socket
     */
    require('./chat')(io);
    require('./httpCall')(io);

};