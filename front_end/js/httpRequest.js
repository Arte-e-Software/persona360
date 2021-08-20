async function httpRequest(method, api, payload, callback, error) {

    if (!error) { error = (err) => feedBack(err, 'Ocorreu um erro', 'danger') }

    switch (method) {

        case 'GET':

            axios.get(api)
                .then((response) => {

                    callback(response);

                })
                .catch((err) => {

                    error(err);

                })
            break;

        case 'POST':

            axios.post(api, payload)
                .then((response) => {

                    callback(response);

                })
                .catch((err) => {

                    error(err);

                })
            break;

        default:
            return { error: 'Método não aceito' };
    };

};