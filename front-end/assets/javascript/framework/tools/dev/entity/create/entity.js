const entity = form => {

    let entity = {}

    if (form.name.input.value) {

        form.name.input.className = 'form-control is-valid'
        form.namespace.input.focus()

        if (form.namespace.input.value) {

            form.namespace.input.className = 'form-control is-valid'

            let draft = {

                "name": form.name.input.value,
                "namespace": form.namespace.input.value.split(','),
                "fields": {
                    "settings": form.fields.settings,
                    "privacy": document.getElementsByClassName('select-privacy'),
                    "type": document.getElementsByClassName('select-type'),
                    "length": document.getElementsByClassName('input-length'),
                    "nullable": document.getElementsByClassName('checkbox-nullable'),
                    "searchable": document.getElementsByClassName('checkbox-searchable')
                },
                "button": {
                    "create": form.button.create
                }
            }

            entity = {
                "name": draft.name,
                "namespace": draft.namespace,
                "fields": [{}]
            }

            draft.fields.settings.innerHTML = settings(draft.namespace)
            draft.fields.privacy[0].focus()

            for (let field in draft.namespace) {

                entity.fields.push({

                    "name": draft.namespace[field],
                    "settings": {
                        "privacy": draft.fields.privacy[field].options[draft.fields.privacy[field].selectedIndex].value,
                        "type": draft.fields.type[field].options[draft.fields.type[field].selectedIndex].value,
                        "length": draft.fields.length[field].value,
                        "nullable": draft.fields.nullable[field].value,
                        "searchable": draft.fields.searchable[field].value
                    }

                })
            }
        }
    }

    return entity ? console.log(form, entity) : false

}