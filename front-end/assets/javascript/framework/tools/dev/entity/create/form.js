window.onload = () => {

    // #issue: poderia vir de um config.json
    const form = {

        tab: {
            create: document.getElementById('entity-create-tab')
        },

        name: {
            alert: document.getElementById('alert-entity-name'),
            input: document.getElementById('input-text-entity-name'),
            trigger: 'keypress',
            filter: ',ABCDEFGHIJKLMNOPQRSTUVXWYZabcdefghijklmnopqrstuvxwyz0123456789_ '
        },

        namespace: {
            alert: document.getElementById('alert-entity-namespace'),
            input: document.getElementById('input-textarea-entity-namespace'),
            trigger: 'keypress',
            filter: ',ABCDEFGHIJKLMNOPQRSTUVXWYZabcdefghijklmnopqrstuvxwyz0123456789_ '
        },

        fields: {
            alert: document.getElementById('alert-entity-fields'),
            settings: document.getElementById('fields-settings')
        },

        table: {
            name: document.getElementById('table-name')
        },

        button: {
            restart: document.getElementById('btn-entity-create-restart'),
            create: document.getElementById('btn-entity-create')
        }
    }

    // #issue: poderia ter um orquestrador global
    // #issue: poderia vir de um config.json
    enter(form, 'name')
    enter(form, 'namespace')

    form.tab.create.addEventListener('click', event => {

        event.preventDefault()
        form.name.input.focus()

    })

    form.button.restart.addEventListener('click', event => {

        // #issue: pensar em como mapear forms nas entidades
        event.preventDefault()
        form.name.input.focus()
        form.name.input.value = ''
        form.namespace.input.value = ''
        form.fields.settings.innerHTML = ''
        form.name.input.className = 'form-control is-invalid'
        form.namespace.input.className = 'form-control is-invalid'
        form.button.create.setAttribute('disabled', true)

    })

}