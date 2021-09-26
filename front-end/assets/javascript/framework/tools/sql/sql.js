document.onload = (() => {

    let status = 'waiting'
    document.getElementById('sql-terminal-tab').addEventListener('click', event => {

        document.getElementById('sql-server-input').focus()

    })
    sql('sql-server-btn-run', 'sql-server-input', 'sql-server-target', status)

})()

function sql(btn, input, target, status) {

    btn = document.getElementById(btn)
    input = document.getElementById(input)
    target = document.getElementById(target)
    tab = document.getElementById(target.id.replace('target', 'tab'))

    input.addEventListener('dblclick', (event) => {
        event.preventDefault()
        input.value = ''
        target.innerHTML = ''
    })

    btn.addEventListener('click', event => {

        event.preventDefault()

        let arrowinput = input.value.split('=>')
            , query = arrowinput[0]
            , format = arrowinput[1]

        tab.innerHTML = `
                        <div class="d-flex align-items-center text-secondary">
                            <i class="bi bi-search"></i>&nbsp;&nbsp;Query
                        </div>`

        target.innerHTML = `
                        <div class="d-flex align-items-center text-secondary">
                            <strong>Analisando a query...</strong>
                            <div class="spinner-border spinner-border-sm ms-auto" role="status" aria-hidden="true"></div>
                        </div>`
        
        btn.className = 'form-control btn btn-outline-success mt-2'
        btn.innerHTML = 'Aguarde o retorno do servidor'
        btn.disabled = true

        if (!format) { format = 'table' }

        let payload = {

            "query": query,
            "format": format,
            "target": target.id,
            "btn": btn.id,
            "status": status

        }

        call('sql', payload, (package) => { // #issue: como enviar o callback para a SQL()?

            let payload = package.payload
                , error = package.error
                , err = payload
                , btn = document.getElementById(payload.btn)
                , target = document.getElementById(payload.target)
                , tab = document.getElementById(target.id.replace('target', 'tab'))

            tab.innerHTML = `<i class="bi bi-files"></i>&nbsp;&nbsp;Retorno`

            if (error) {

                err = payload.status //.originalError.info.message

                alert('Erro', err, 'danger')
                console.log('Sql error', payload.status)

                tab.innerHTML = `<i class="bi bi-files"></i>&nbsp;&nbsp;Retorno`
                target.innerHTML = ''
                btn.className = 'form-control btn btn-success mt-2'
                btn.innerHTML = `Rodar <i class="bi bi-play-btn"></i>`
                btn.disabled = false

            } else {

                if (payload.status === 'waiting') {

                    tab.innerHTML = `
                    <div class="d-flex align-items-center text-secondary">
                        <div class="spinner-border spinner-border-sm ms-auto" role="status" aria-hidden="true"></div>
                        &nbsp;&nbsp;Processando
                    </div>`

                    target.innerHTML = `
                    <div class="d-flex align-items-center text-secondary">
                        <strong>Processando...</strong>
                        <div class="spinner-border spinner-border-sm ms-auto" role="status" aria-hidden="true"></div>
                    </div>`

                    btn.className = 'form-control btn btn-outline-success mt-2'
                    btn.innerHTML = 'Aguarde o retorno do servidor'
                    btn.disabled = true

                } else {

                    tab.innerHTML = `<i class="bi bi-files"></i></spam>&nbsp;&nbsp;Retorno`
                    target.innerHTML = payload.status
                    btn.className = 'form-control btn btn-success mt-2'
                    btn.innerHTML = `Rodar <i class="bi bi-play-btn"></i>`
                    btn.disabled = false

                }
            }
        }) 
        return true
    })
}