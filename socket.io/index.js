const chat = require('./chat')
    , call = require('./call')
    , socket = require('socket.io')
    ; 

module.exports = server => {

    // serviço socket.io
    let io = socket(server);

    // módulos clientes
    chat(io);
    call(io);

};