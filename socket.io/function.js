const package = require('./package')

module.exports = (socket, payload) => {

  let serverfunction = payload.serverfunction
    , serverfunctionparams = payload.serverfunctionparams

  try {

    let serverfunctionreturn = require(`${serverfunction}`)(serverfunctionparams)
      , payload = { "serverfunctionreturn": serverfunctionreturn }

    socket.emit('call', package('function', payload, false))

  } catch (err) {

    let payload = { "serverfunctionreturn": err }
    socket.emit('call', package('function', payload, true))

  }

}