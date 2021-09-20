window.onload = () => {

  // #issue: pensar em como lidar melhor com os filtros
  // #issue: poderia vir de um config.json
  let allowedChars = ',ABCDEFGHIJKLMNOPQRSTUVXWYZabcdefghijklmnopqrstuvxwyz0123456789_ '

  // #issue: poderia vir de um config.json
  const entity = {

    name: {
      alert: document.getElementById('alert-entity-name'),
      input: document.getElementById('input-text-entity-name'),
      listen: 'keypress',
      allow: allowedChars,
      enter: handler
    },

    namespace: {
      alert: document.getElementById('alert-entity-namespace'),
      input: document.getElementById('input-textarea-entity-namespace'),
      listen: 'keypress',
      allow: allowedChars,
      enter: handler
    },

    table: {

      alert: document.getElementById('alert-entity-table'),
      tbody: document.getElementById('tbody-fields')
    }

  }

  let name = entity.name
    , namespace = entity.namespace
    , table = entity.table

  // #issue: não consigo colocar foco no campo name 
  name.input.focus()

  // #issue: poderia ter um orquestrador global
  // #issue: poderia vir de um config.json
  listenEnter(name)
  listenEnter(namespace)

  function handler(element) {

    let value = element.input.value

    if (element.input.id === 'input-text-entity-name') {

      let entityName = document.getElementById('input-text-entity-name')
        , entityNamespace = document.getElementById('input-textarea-entity-namespace')

      entityName.className = 'form-control is-valid'
      entityName.setAttribute('readonly', true)
      entityNamespace.focus()

    }

    if (element.input.id === 'input-textarea-entity-namespace') {

      let entityNamespace = document.getElementById('input-textarea-entity-namespace')
      entityNamespace.className = 'form-control is-valid'
      entityNamespace.setAttribute('readonly', true)

      table.tbody.innerHTML = helperConfig(value.split(','))

      const entity = {
        name: name.input.value,
        fields: value.split(','), // = namespace
        config: {
          privacy: document.getElementsByClassName('select-privacy'),
          type: document.getElementsByClassName('select-type'),
          length: document.getElementsByClassName('input-length'),
          nullable: document.getElementsByClassName('checkbox-nullable'),
          searchable: document.getElementsByClassName('checkbox-searchable')
        }
      }

      listenChange(entity)

    }
  }
}