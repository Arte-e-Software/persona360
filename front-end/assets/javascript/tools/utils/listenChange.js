function listenChange(entity) {

  const config = entity.config
    , fields = entity.fields

  let listeners = []
    , privacy = config.privacy
    , type = config.type
    , length = config.length
    , nullable = config.nullable
    , searchable = config.searchable
    , change

  privacy[0].focus()

  for (index = 0; index < fields.length; index++) {

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

      listeners.push({
        field: fields[index],
        values: {
          privacy: privacy[index].options[privacy[index].selectedIndex].value,
          type: type[index].options[type[index].selectedIndex].value,
          length: length[index].value,
          nullable: nullable[index].value,
          searchable: searchable[index].value
        }
      })

      document.getElementById('buttons').style.display = 'block'
        *
        handlerListen(entity, change)

    } catch (err) {
      9
      return

    }

  }

  return entity

}