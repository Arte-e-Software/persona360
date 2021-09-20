function listenChange(entity) {

  const fields = entity.fields
    , namespace = entity.namespace

  let field = []
    , privacy = fields.privacy
    , type = fields.type
    , length = fields.length
    , nullable = fields.nullable
    , searchable = fields.searchable
    , change

  privacy[0].focus()

  for (index = 0; index < namespace.length; index++) {

    try {

      privacy[index].addEventListener('change', event => {

        event.preventDefault()
        // #issue: pensar melhor
        change = { "key": event.target.id, "value": event.target.options[event.target.selectedIndex].value }

      })

      type[index].addEventListener('change', event => {

        event.preventDefault()
        // #issue: pensar melhor
        // #issue: tratar o readonly de length
        change = { "key": event.target.id, "value": event.target.options[event.target.selectedIndex].value }

      })

      length[index].addEventListener('keyup', event => {

        event.preventDefault()
        // #issue: pensar melhor
        change = { "key": event.target.id, "value": event.target.value }

      })

      nullable[index].addEventListener('change', event => {

        event.preventDefault()
        // #issue: pensar melhor
        change = { "key": event.target.id, "value": event.target.checked }

      })

      searchable[index].addEventListener('change', event => {

        event.preventDefault()
        // #issue: pensar melhor
        change = { "key": event.target.id, "value": event.target.checked }

      })

      field.push({
        name: namespace[index],
        config: {
          privacy: privacy[index].options[privacy[index].selectedIndex].value,
          type: type[index].options[type[index].selectedIndex].value,
          length: length[index].value,
          nullable: nullable[index].value,
          searchable: searchable[index].value
        }
      })

      document.getElementById('buttons').style.display = 'block'

      handlerListen(entity, change)

    } catch (err) {

      return

    }

  }

  return entity

}