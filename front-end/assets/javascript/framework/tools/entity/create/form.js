window.onload = () => {
  // #issue: poderia vir de um config.json
  const form = {
    tab: {
      create: document.getElementById('entity-create-tab')
    },
    name: {
      alert: document.getElementById('alert-entity-name'),
      input: document.getElementById('input-text-entity-name'),
      filter: ',ABCDEFGHIJKLMNOPQRSTUVXWYZabcdefghijklmnopqrstuvxwyz0123456789_ '
    },
    namespace: {
      alert: document.getElementById('alert-entity-namespace'),
      input: document.getElementById('input-textarea-entity-namespace'),
      filter: ',ABCDEFGHIJKLMNOPQRSTUVXWYZabcdefghijklmnopqrstuvxwyz0123456789_ '
    },
    fields: {
      alert: document.getElementById('alert-entity-fields'),
      settings: document.getElementById('fields-settings')
    },
    button: {
      config: document.getElementById('btn-entity-create-config'),
      create: document.getElementById('btn-entity-create')
    },
    json: document.getElementById('entity-json')
  }
  enter(form, 'name')
  enter(form, 'namespace')
  form.tab.create.addEventListener('click', event => {
    event.preventDefault()
    form.name.input.focus()
  })
  form.button.config.addEventListener('click', event => {
    event.preventDefault()
    form.name.input.focus()
    form.name.input.value = ''
    form.namespace.input.value = ''
    form.fields.settings.innerHTML = ''
    form.json.innerHTML = ''
    form.name.input.className = 'form-control is-invalid'
    form.namespace.input.className = 'form-control is-invalid'
    form.button.create.setAttribute('disabled', true)
  })
  return
}