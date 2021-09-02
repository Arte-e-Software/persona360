function request(url, payload, callback) {

    axios.post(url, payload)
        .then(response => { callback(responseJsonParse(response.data), payload) })
        .catch(err => {
            
            err = err.response.data
            console.log(err)
            alert('Erro', `${err} - <small>Detalhes no console</small>`, 'danger')

        })

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