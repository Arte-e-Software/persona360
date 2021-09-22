function file(btn, input, target, status) {

    let clicked
        , entity
        , payload = {

            "format": 'json',
            "status": status,
            "target": target,
            "btn": btn,
            "input": input,
            "file": ''

        }

    btn = document.getElementsByClassName(btn)
    target = document.getElementById(target)
    input = document.getElementsByName(input)
    target.innerHTML = ''

    for (i = 0; i < btn.length; i++) {

        clicked = btn[i]
        clicked.addEventListener('click', (event) => {

            event.preventDefault()
            entity = event.target.id.replace('btn-entity-', '')
            payload.file = entity
            payload.btn = `btn-entity-${entity}`

            console.log(clicked)

            if (payload.file === 'create') {

                target.style.display = 'block'
                alert('info', payload.file, 'info')

            } else {

                let notification = document.getElementById(`notification-entity-${entity}`)

                call('file', payload, (received) => {

                    let error = received.error
                        , payload = received.payload

                    if (error) {

                        alert('Erro', payload.status, 'danger')
                        notification.className = 'position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle'

                    } else {

                        let entity = payload.file
                            , name = entity.name
                            , namespace = entity.namespace
                            , fields = entity.fields
                        
                        target.style.display = 'block'

                    }
                })
            }
        })
    }
    return true
}