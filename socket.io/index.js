const call = require('./call')
    , socket = require('socket.io')
    ; 

module.exports = server => {

    // serviço socket.io
    let io = socket(server);

    // módulos clientes
    call(io);

};