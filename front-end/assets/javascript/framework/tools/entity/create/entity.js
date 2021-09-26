const entity = form => {

    let entity = {
        "name": form.name.input.value,
        "namespace": form.namespace.input.value.split(',').map(name => { return name.trim() }),
        "fields": []
    }

    if (form.name.input.value) {

        form.name.input.className = 'form-control is-valid'
        form.namespace.input.focus()

        if (form.namespace.input.value) {

            form.namespace.input.className = 'form-control is-valid'

            let draft = {

                "fields": {
                    "settings": form.fields.settings,
                    "privacy": document.getElementsByClassName('select-privacy'),
                    "type": document.getElementsByClassName('select-type'),
                    "length": document.getElementsByClassName('input-length'),
                    "nullable": document.getElementsByClassName('checkbox-nullable'),
                    "hash": document.getElementsByClassName('checkbox-hash'),
                    "searchable": document.getElementsByClassName('checkbox-searchable')
                }

            }

            draft.fields.settings.innerHTML = settings(form.namespace.input.value.split(','))
            draft.fields.privacy[0].focus()

            for (let field in entity.namespace) {

                entity.fields.push({

                    "name": entity.namespace[field],
                    "settings": {
                        "privacy": draft.fields.privacy[field].options[draft.fields.privacy[field].selectedIndex].value,
                        "type": draft.fields.type[field].options[draft.fields.type[field].selectedIndex].value,
                        "length": draft.fields.length[field].value,
                        "nullable": draft.fields.nullable[field].checked,
                        "hash": draft.fields.hash[field].checked,
                        "searchable": draft.fields.searchable[field].checked
                    }

                })

            }

            entity.namespace.push('crdate')
            entity.namespace.push('isactive')
            entity.namespace.unshift(`id_${entity.name}`)

            entity.fields.push({

                "name": `crdate`,
                "settings": {
                    "privacy": 'anonimizado',
                    "type": 'date',
                    "length": '',
                    "nullable": false,
                    "hash": false,
                    "searchable": true
                }

            })

            entity.fields.push({

                "name": `isactive`,
                "settings": {
                    "privacy": 'anonimizado',
                    "type": 'boolean',
                    "length": '',
                    "nullable": false,
                    "hash": false,
                    "searchable": true
                }

            })

            entity.fields.unshift({

                "name": `id_${entity.name}`,
                "settings": {
                    "privacy": 'anonimizado',
                    "type": 'number',
                    "length": '',
                    "nullable": false,
                    "hash": false,
                    "searchable": true
                }

            })

        }
    }

    if (entity) {

        form.json.innerHTML = `<tr><td>${pretty(entity)}</td></tr>`

        let change = { setting: '', value: '' }

        for (let i = 1; i < entity.fields.length - 2; i++) {

            document.getElementById(`field-${entity.fields[i].name}-type`).addEventListener('change', event => {

                event.code === 'Enter' || 'NumpadEnter' ? event.preventDefault() : false
                change.setting = event.target.id
                change.value = event.target.options[event.target.selectedIndex].value
                console.log(change)

            })

            document.getElementById(`field-${entity.fields[i].name}-length`).addEventListener('keypress', event => {

                change.setting = event.target.id
                change.value = event.target.value
                console.log(change)

            })

            document.getElementById(`field-${entity.fields[i].name}-nullable`).addEventListener('change', event => {

                event.code === 'Enter' || 'NumpadEnter' ? event.preventDefault() : false
                change.setting = event.target.id
                change.value = event.target.checked
                console.log(change)


            })

            document.getElementById(`field-${entity.fields[i].name}-hash`).addEventListener('change', event => {

                event.code === 'Enter' || 'NumpadEnter' ? event.preventDefault() : false
                change.setting = event.target.id
                change.value = event.target.checked
                console.log(change)

            })

            document.getElementById(`field-${entity.fields[i].name}-searchable`).addEventListener('change', event => {

                event.code === 'Enter' || 'NumpadEnter' ? event.preventDefault() : false
                change.setting = event.target.id
                change.value = event.target.checked
                console.log(change)

            })

        }

    } else {

        return

    }

    return

}