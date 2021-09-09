const runsql = document.getElementById('runsql')
    , sqlreturn = document.getElementById('sql-return')
    , query = document.getElementById('text-area-query')

document.onload = (() => {

    runsql.addEventListener('click', event => {

        event.preventDefault()

        let arrTextAreaValue = query.value.split('=>')
        let thisQuery = arrTextAreaValue[0]
        let thisFormat = arrTextAreaValue[1]
        
        if (!thisFormat) { thisFormat = 'table' }

        call('sql', { "query": thisQuery, "format": thisFormat }, sqlReturn)
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

            if (payload.code) { err = payload.originalError.info.message }

            alert('Erro', err, 'danger')
            console.log('Erro', payload)

            sqlreturn.innerHTML = ''
            runsql.className = 'form-control btn btn-lg btn-success mt-2'
            runsql.innerHTML = `Rodar <i class="bi bi-play-btn"></i>`
            runsql.disabled = false

        } else {

            if (payload === 'Aguarde retorno do servidor') {

                sqlreturn.innerHTML = `
                <div class="d-flex align-items-center text-secondary">
                    <strong>Processando...</strong>
                    <div class="spinner-border spinner-border-sm ms-auto" role="status" aria-hidden="true"></div>
                </div>`
                runsql.className = 'form-control btn btn-lg btn-outline-success mt-2'
                runsql.innerHTML = payload
                runsql.disabled = true

            } else {

                sqlreturn.innerHTML = payload
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

