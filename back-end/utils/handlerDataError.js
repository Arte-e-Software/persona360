module.exports = (method, payload) => {

    let methods = ['GET', 'POST']
        , modules = ['create', 'read', 'update', 'delete', 'search']
        , error = [false, false, false, false] //  method, entity, module, params
        , errorMsg = false
        ;

    error[0] = ['method', methods.indexOf(method) < 0]
    error[1] = ['entity', !payload.entity]
    error[2] = ['module', modules.indexOf(payload.module) < 0]
    error[3] = ['params', !payload.params]

    errorFound = error.map(err => { return err[1] }).reduce((e, err) => { if (err) { e = err } return e })
    errorMsg = error.map(err => { if (err[1]) { return err[0].toUpperCase() } }).filter(err => { if (err) { return err } }).join(' e ')

    if (errorFound) {

        errorMsg = `Verifique: <strong>${errorMsg}</strong>`

    } else {

        try {

            let params = payload.params
                , entity = require(`../config/entities/${payload.entity.toLowerCase()}.json`)
                , fields = entity.fields
                , requiredParams = fields.map(field => { if (!field.null && !field.default) { return field.name } }).filter(name => { if (name) { return name } })
                , paramsError = []
                ;

            for (let param in requiredParams) { !params[requiredParams[param]] ? paramsError.push(requiredParams[param]) : () => { }; }
            paramsError.length > 0 ? errorMsg = `Parâmetros obrigatórios omitidos:<p>${paramsError.join('<br>')}</p> para a entidade <strong>${entity.name.toUpperCase()}</strong>` : () => { };

        } catch { errorMsg = `Entidade <strong>${payload.entity.toUpperCase()}</strong> não localizada ou corrompida` }
    
    }

    return errorMsg

};