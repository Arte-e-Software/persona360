function serverfunction(serverfunction, serverfunctionparams) {

    let params = {

        "serverfunction": serverfunction,
        "serverfunctionparams": serverfunctionparams

    }

    call('function', params, (returned) => {

        let serverfunctionreturn = returned.payload.serverfunctionreturn
        return serverfunctionreturn

    })

}