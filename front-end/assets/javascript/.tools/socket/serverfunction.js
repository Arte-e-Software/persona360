const serverfunction = (serverfunction, serverfunctionparams, res) => {

  let params = {

    "serverfunction": serverfunction,
    "serverfunctionparams": serverfunctionparams

  }

  return call('function', params, (returned) => {

    let serverfunctionreturn = returned.payload.serverfunctionreturn
    return res(serverfunctionreturn)

  })

}