const runsql = document.getElementById('runsql')
    , sqlreturn = document.getElementById('sql-return')
    , query = document.getElementById('text-area-query')

document.onload = (() => {

    runsql.addEventListener('click', event => {

        event.preventDefault()
        call('sql', query.value, sqlReturn)
        return

    })

})()

function sqlReturn(socket, received) {

    if (received.resource === 'sql') {

        let resource = received.resource
            , payload = received.payload
            , error = received.error
            , err = payload

        if (error) {

            if (payload.code) {

                err = {
                    "code": payload.code,
                    "lineNumber": payload.lineNumber,
                    "number": payload.number,
                    "event": payload.originalError.event,
                    "message": payload.originalError.message,
                    "serverName": payload.originalError.serverName
                }
            }

            alert('Erro', err, 'danger')

        } else {

            if (payload === 'Aguarde retorno do servidor') {

                runsql.className = 'form-control btn btn-lg btn-outline-success mt-2'
                runsql.innerHTML = payload
                runsql.disabled = true

            } else {


                let recorset = payload.recordsets[0]
                    , firstRow = Object.entries(recorset[0])
                    , rows = Object.entries(recorset)
                    , head = firstRow.map(row => { return row[0] })
                    , body = rows.map(row => { return row[1] })
                    , thead = head.map(row => { return `<th>${row[0]}</th>` })
                    , tbody = body.map(row => { return `<td>${row[1]}</td>` })
                    
                rowsAffected = body.length

                sqlreturn.innerHTML = `
<div>
<p>
rowsAffected: ${rowsAffected}
</div>
<div class="table-responsive">
<table class="table table-striped">
<thead>
<tr>
${thead}
</tr>
</thead>
<tbody>
<tr>
${tbody}
</tr>
</tbody
</table>
</div>
            `
                runsql.className = 'form-control btn btn-lg btn-success mt-2'
                runsql.innerHTML = `Rodar <i class="bi bi-play-btn"></i>`
                runsql.disabled = false

            }
        }

    } else {

        err = `Resource inválido: ${received.resource}`
        alert('Erro', err, 'danger')

    }

}

