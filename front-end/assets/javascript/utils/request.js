function request(url, payload, callback) {

    axios.post(url, payload)
        .then(response => { callback(responseJsonParse(response.data), payload) })
        .catch(err => { alert('Erro', `${err.response.data} - <small>Detalhes no console</small>`, 'danger'); err = JSON.stringify(err); console.log(err) })

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