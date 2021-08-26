function httpRequest(config) {

    switch (config.method) {

        case 'GET':
            axios.get(config.api)
                .then(response => config.resolve(response))
                .catch(err => config.reject(err))
            break;

        case 'POST':

            axios.post(config.api, config.payload)
                .then(response => config.resolve(response))
                .catch(err => config.reject(err))
            break;

        default:
            return alert('Ocorreu um erro', `${config.method}: verbo http recusado`, 'danger')
    }

};