function handlerEntityCreate(entity, element) {

  element.input.className = 'form-control is-valid'
  element.input.setAttribute('readonly', true)
  entity.table.name.innerHTML = entity.name.input.value

  let name = entity.name.input.value

  if (name) {

    entity.namespace.input.focus()

    let fields = entity.namespace.input.value

    // #issue: precisa melhorar
    if (fields) {

      entity.fields.config.innerHTML = helperConfig(fields.split(','))

      const newEntity = {

        name: entity.name.input.value,
        namespace: entity.namespace.input.value,

        fields: {
          privacy: document.getElementsByClassName('select-privacy'),
          type: document.getElementsByClassName('select-type'),
          length: document.getElementsByClassName('input-length'),
          nullable: document.getElementsByClassName('checkbox-nullable'),
          searchable: document.getElementsByClassName('checkbox-searchable')
        }

      }

      return listenChange(newEntity)

    }
  }
}