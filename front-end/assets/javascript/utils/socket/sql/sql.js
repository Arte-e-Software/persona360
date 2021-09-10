document.onload = (() => {

    SQL('runsql', 'text-area-query', 'sql-return', 'waiting')

})()

function SQL(btn, input, element, status) {

    btn = document.getElementById(btn)
    input = document.getElementById(input)

    btn.addEventListener('click', event => {

        event.preventDefault()

        let arrowinput = input.value.split('=>')
            , query = arrowinput[0]
            , format = arrowinput[1]

        if (!format) { format = 'table' }

        let payload = {

            "query": query,
            "format": format,
            "element": element,
            "btn": btn.id,
            "status": status

        }

        call('sql', payload, callbak)
        return

    })

}

function callbak(package) { // #issue: como enviar esse função como parâmetro para a SQL()?

    let payload = package.payload
        , error = package.error
        , err = payload
        , btn = document.getElementById(payload.btn)
        , element = document.getElementById(payload.element)

    if (error) {

        err = payload.status //.originalError.info.message
        
        alert('Erro', err, 'danger')
        console.log('Sql error', payload.status)

        element.innerHTML = ''
        btn.className = 'form-control btn btn-lg btn-success mt-2'
        btn.innerHTML = `Rodar <i class="bi bi-play-btn"></i>`
        btn.disabled = false

    } else {

        if (payload.status === 'waiting') {

            element.innerHTML = `
                <div class="d-flex align-items-center text-secondary">
                    <strong>Processando...</strong>
                    <div class="spinner-border spinner-border-sm ms-auto" role="status" aria-hidden="true"></div>
                </div>`
            btn.className = 'form-control btn btn-lg btn-outline-success mt-2'
            btn.innerHTML = 'Aguarde o retorno do servidor'
            btn.disabled = true

        } else {

            element.innerHTML = payload.status
            btn.className = 'form-control btn btn-lg btn-success mt-2'
            btn.innerHTML = `Rodar <i class="bi bi-play-btn"></i>`
            btn.disabled = false

        }
    }
}