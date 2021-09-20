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
      enter: handlerEntityCreate
    },

    namespace: {
      alert: document.getElementById('alert-entity-namespace'),
      input: document.getElementById('input-textarea-entity-namespace'),
      listen: 'keypress',
      allow: allowedChars,
      enter: handlerEntityCreate
    },

    fields: {
      alert: document.getElementById('alert-entity-fields'),
      name: document.getElementById('entity-fields'),
      config: document.getElementById('fields-config')
    },

    table: {
      name: document.getElementById('table-name')
    },

    button: {
      restart: document.getElementById('btn-entity-create-restart'),
      create: document.getElementById('btn-entity-create')
    }

  }

  document.getElementById('entity-create-tab').addEventListener('click', event => {

    entity.name.input.focus()

  })

  // #nota: inicindo a interface do entity-create
  entity.name.input.value = ''
  entity.name.input.className = 'form-control is-invalid'
  entity.name.input.readOnly = false

  entity.namespace.input.value = ''
  entity.namespace.input.className = 'form-control is-invalid'
  entity.namespace.input.readOnly = false

  entity.fields.config.innerHTML = ''

  // #issue: poderia ter um orquestrador global
  // #issue: poderia vir de um config.json
  listenEnter(entity, entity.name)
  listenEnter(entity, entity.namespace)
  entity.button.create.disabled = true

  entity.button.restart.addEventListener('click', event => {

    event.preventDefault()

    entity.name.input.value = ''
    entity.name.input.className = 'form-control is-invalid'
    entity.name.input.readOnly = false

    entity.namespace.input.value = ''
    entity.namespace.input.className = 'form-control is-invalid'
    entity.namespace.input.readOnly = false

    entity.table.name.innerHTML = ''

    entity.fields.config.innerHTML = ''

    entity.name.input.focus()

  })

  entity.button.create.addEventListener('click', event => {

    event.preventDefault()

    alert('Entity', entity, 'success')

  })

}