var runsql = document.getElementById('runsql')
    , sqlreturn = document.getElementById('sql-return')
    , query = document.getElementById('text-area-query').value

document.onload = (() => {

    runsql.addEventListener('click', event => {

        event.preventDefault()
        call('sql', query, sqlReturn)
        return

    })

})()

function sqlReturn(socket, received) {

    let method = received.method
        , payload = received.payload
        , error = received.error

    if (error) {

        alert('Erro', payload, 'danger')

    } else {

        if (payload === 'Aguarde retorno do servidor') {

            runsql.className = 'form-control btn btn-lg btn-outline-success mt-2'
            runsql.innerHTML = payload
            runsql.disabled = true

        } else {


            let output = payload.output
                , recordsets = payload.recordsets
                , rowsAffected = payload.rowsAffected

            output = JSON.stringify(output)
            rowsAffected = JSON.stringify(rowsAffected[0])



            console.log(recordsets)

            sqlreturn.innerHTML = `
    <div class="container table-responsive">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Output</th>
                    <th>Recordsets</th>
                    <th>rowsAffected</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${output}</td>
                    <td>${recordsets}</td>
                    <td>${rowsAffected}</td>
                </tr>
            </tbody
                    </table>
            `
            runsql.className = 'form-control btn btn-lg btn-success mt-2'
            runsql.innerHTML = `Rodar <i class="bi bi-play-btn"></i>`
            runsql.disabled = false

        }
    }
}

