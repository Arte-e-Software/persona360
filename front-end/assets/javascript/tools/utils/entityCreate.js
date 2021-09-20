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

    fields: {
      alert: document.getElementById('alert-entity-fields'),
      name: document.getElementById('entity-fields'),
      config: document.getElementById('fields-config')
    },

    table: {
      name: document.getElementById('table-name')
    }

  }

  let name = entity.name
    , namespace = entity.namespace
    , fields = entity.fields
    , table = entity.table

  // #issue: não consigo colocar foco no campo name 
  document.getElementById('input-text-entity-name').focus()

  // #issue: poderia ter um orquestrador global
  // #issue: poderia vir de um config.json
  listenEnter(name)
  listenEnter(namespace)

  function handler(element) {

    let value = element.input.value

    if (element.input.id === name.input.id) {

      name.input.className = 'form-control is-valid'
      name.input.setAttribute('readonly', true)
      table.name = name.input.value
      namespace.input.focus()

    }

    if (element.input.id === namespace.input.id) {

      namespace.input.className = 'form-control is-valid'
      namespace.input.setAttribute('readonly', true)

      fields.config.innerHTML = helperConfig(value.split(','))

      const entity = {
        name: name.input.value,
        namespace: value.split(','), // = namespace
        fields: {
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