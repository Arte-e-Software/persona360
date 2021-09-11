const package = require('./package')

module.exports = (socket, payload) => {

    // #issue: pensar bastante na questão da segurança
    // a princícpio só vou expor o diretório config
    let error = false
    socket.emit('call', package('file', payload, error))
    
    try {

        let file = require(`../config/entities/${payload.file}.${payload.format}`)
        payload.file = file
        payload.status = 'done'
        socket.emit('call', package('file', payload, error))

    } catch (err) {

        err = JSON.stringify(err)
        payload.status = `${payload.file}: ${err}`
        error = true
        socket.emit('call', package('file', payload, error))

    }

}