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
          "searchable": document.getElementsByClassName('checkbox-searchable')
        }

      }

      draft.fields.settings.innerHTML = settings(form.namespace.input.value.split(','))
      //draft.fields.privacy[0].focus()

      console.log(draft)

      for (let field in entity.namespace) {

        entity.fields.push({

          "name": entity.namespace[field],
          "settings": {
            "privacy": draft.fields.privacy[field].options[draft.fields.privacy[field].selectedIndex].value,
            "type": draft.fields.type[field].options[draft.fields.type[field].selectedIndex].value,
            "length": draft.fields.length[field].value,
            "nullable": draft.fields.nullable[field].value,
            "searchable": draft.fields.searchable[field].value
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
          "searchable": true
        }

      })

    }
  }

  if (entity) {

    form.button.create.setAttribute('disable', false)
    // #issue: falta adicionar listen nas mudanças dos settings
    form.entitysql.innerHTML = `<tr><td>${pretty(entity)}</td></tr>`

    serverfunction('../back-end/database/mssql/templates/create-table', entity, (res) => {

      return form.sql.innerHTML = `<tr><td>${res.split(';').join(';<br>')}</td></tr>`

    })

  } else {

    return

  }

  return

}