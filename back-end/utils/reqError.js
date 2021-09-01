module.exports = (method, payload) => {

    let methods = ['GET', 'POST']
        , modules = ['create', 'read', 'update', 'delete', 'search']
        , error = [false, false, false, false] //  method, entity, module, params
        , reqError = false
        ;

    error[0] = ['method', methods.indexOf(method) < 0]
    error[1] = ['entity', !payload.entity]
    error[2] = ['module', modules.indexOf(payload.module) < 0]
    error[3] = ['params', !payload.params]

    errorFound = error.map(err => { return err[1] }).reduce((e, err) => { if (err) { e = err } return e })
    reqError = error.map(err => { if (err[1]) { return err[0].toUpperCase() } }).filter(err => { if (err) { return err } }).join(' e ')

    if (errorFound) {

        reqError = `Verifique: <strong>${reqError}</strong>`

    } else {

        try {

            let params = payload.params
                , entity = require(`../config/entities/${payload.entity.toLowerCase()}.json`)
                , fields = entity.fields
                , reqParams = {
                    "create": fields.map(field => { if (!field.null && !field.default) { return field.name } }).filter(name => { if (name) { return name } }),
                    "read": [`id${entity.name}`],
                    "update": [`id${entity.name}`, `idPessoa`],
                    "delete": [`id${entity.name}`, `idPessoa`],
                    "search": [`name`, `isActive`]
                }
                , paramsError =[]
                ;

            for (let param in reqParams[payload.module]) { !params[reqParams[payload.module][param]] ? paramsError.push(reqParams[payload.module][param]) : () => { }; }
            paramsError.length > 0 ? reqError = `Parâmetros obrigatórios omitidos:<p>${paramsError.join('<br>')}</p> para a entidade <strong>${entity.name.toUpperCase()}</strong>` : () => { };

        } catch { reqError = `Entidade <strong>${payload.entity.toUpperCase()}</strong> não localizada ou corrompida` }
    
    }

    return reqError

};