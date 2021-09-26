function request(req) {

    let url = req.url
        , payload = req.payload

    switch (req.method) {
        
        case 'get':

            axios.get(url, payload)
                .then(response => { req.callback(responseJsonParse(response.data), payload) })
                .catch(err => {
                    err = err.response.data
                    console.log(err)
                    alert('Erro', `${err} - <small>Detalhes no console</small>`, 'danger')
                })
            
            break;
    
        case 'post':

            axios.post(url, payload)
                .then(response => { req.callback(responseJsonParse(response.data), payload) })
                .catch(err => {
                    err = err.response.data
                    console.log(err)
                    alert('Erro', `${err} - <small>Detalhes no console</small>`, 'danger')
                })

            break;
        
        default:
            let err = 'method inválido'
            console.log(`Métodos aceitos: get e post`)
            console.log(`!req.method: ${req.method}`)
            alert('Erro', `${err}<hr><small>Detalhes no console</small>`, 'danger')
            break;
    
    }
}

function responseJsonParse(data) {

    let response = {

            "recordsets": data.recordsets,
            "recordset": data.recordset,
            "output": data.output,
            "rowsAffected": data.rowsAffected

        };

    return response

}