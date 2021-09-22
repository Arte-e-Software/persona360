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
        "fields": []
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

      entity.namespace.push('crdate')
      entity.namespace.push('isactive')
      entity.namespace.unshift(`id_${draft.name}`)

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

    let pretty = entity => {

      let fields = []

      for (let field in entity.fields) {

        fields.push(

          `<li>&nbsp;&nbsp;&nbsp;{ "name": "${entity.fields[field].name}"</li>
                <ul class="list-unstyled">
                <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"settings": {</li>
                  <ul class="list-unstyled">
                  <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"privacy": "${entity.fields[field].settings.privacy}"</li>
                  <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "${entity.fields[field].settings.type}"</li>
                  <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"length": "${entity.fields[field].settings.length}"</li>
                  <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"nullable": "${entity.fields[field].settings.nullable}"</li>
                  <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"searchable": "${entity.fields[field].settings.searchable}"</li>
                  </ul>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</li>
                <li>&nbsp;&nbsp;&nbsp;}</li>`
        )
      }

      return `
          <ul class= "list-unstyled">
            <li>{ "entity": { </li>
            <li>&nbsp;&nbsp;"name": "${entity.name}"</li>
            <li>&nbsp;&nbsp;"namespace": "${entity.namespace}"</li>
            <li>&nbsp;&nbsp;"fields": [
              <ul class="list-unstyled">
                ${fields}
                </ul>
              </ul>
              <li>&nbsp;&nbsp;]</li>
            </li>
          <li>}</li>
          </ul> `
    }

    // #issue: falta adicionar listen nas mudanças dos settings
    form.entitysql.innerHTML = pretty(entity)
    form.sql.innerHTML = 'parei aqui 22/09/2021 09:05'

  } else {

    return

  }

  return entity ? console.log(form, entity) : false

}