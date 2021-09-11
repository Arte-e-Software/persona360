(() => {

    let status = 'waiting'
    FILE(status)

})()

function FILE(status) {

    let btn = document.getElementsByClassName('btn-entity')
        , clicked
        , entity
        , payload = {

            "query": '',
            "format": 'json',
            "status": status,
            "target": '',
            "btn": '',
            "file": ''

        }

    for (i = 0; i < btn.length; i++) {

        clicked = btn[i]
        clicked.addEventListener('click', (event) => {

            event.preventDefault()
            entity = event.target.id.replace('btn-entity-', '')
            payload.file = entity
            payload.btn = `btn-entity-${entity}`

            if (payload.file === 'create') {
                
                alert('Info', 'Rotina create entity', 'info')

            } else {

                call('file', payload, (received) => {

                    let error = received.error
                        , payload = received.payload
                        , waiting = payload.status === 'waiting'

                    if (error) {

                        alert('Erro', payload.status, 'danger')

                    } else {

                        !waiting ? console.log(payload.file) : false

                    }
                })

            }

        })
    }
}