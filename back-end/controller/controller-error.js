const controllerError = require('./controller-tenant')

module.exports = (method, payload) => {

    let tenantAllowed = controllerTenant() // #issue: tenant

    if (tenantAllowed) {

        let methods = ['GET', 'POST']
            , modules = ['create', 'read', 'update', 'delete', 'search']
            , error = [false, false, false, false] //  #nota: method, entity, module, params
            , errorMsg = ''
            ;

        error[0] = ['method', methods.indexOf(method) < 0]
        error[1] = ['entity', !payload.entity]
        error[2] = ['module', modules.indexOf(payload.module) < 0]
        error[3] = ['params', !payload.params]

        errorFound = error.map(err => { return err[1] }).reduce((e, err) => { if (err) { e = err } return e })
        errorMsg = error.map(err => { if (err[1]) { return err[0].toUpperCase() } }).filter(err => { if (err) { return err } }).join(' e ')

        if (errorFound) {

            errorMsg = `Verifique <strong>${errorMsg}</strong>`

        } else {

            try {

                let params = payload.params
                    , entity = require(`../model/entity/index/${payload.entity.toLowerCase()}.json`)
                    , fields = entity.fields
                    , reqParams = {
                        "create": fields.map(field => { if (!field.nullable) { return field.name } }).filter(name => { if (name) { return name } }),
                        "read": [`id_${entity.name}`],
                        "update": [`id_${entity.name}`, `id_pessoa`],
                        "delete": [`id_${entity.name}`, `id_pessoa`],
                        "search": [`name`, `isActive`]
                    }
                    , paramsError = []
                    ;

                for (let param in reqParams[payload.module]) { !params[reqParams[payload.module][param]] ? paramsError.push(reqParams[payload.module][param]) : () => { }; }
                paramsError.length > 0 ? errorMsg = `Parâmetros obrigatórios omitidos <p>${paramsError.join('<br>')}</p> para a entidade <strong>${entity.name.toUpperCase()}</strong>` : () => { };

            } catch { errorMsg = `Entidade <strong>${payload.entity.toUpperCase()}</strong> não localizada ou corrompida` }

        }

    } else {

        errorMsg = `Tenant ${tenant} não autorizado`

    }

    return errorMsg

};