function handlerListen(entity, change) {

  // #issue: aplicar regra de negócio. #paradoaqui

  // #issue: convenção ou configuração? deixei convenção. Opinativo.
  let key = change.key
    , value = change.value
    , rule = (prop) => {

      switch (prop) {

        case 'privacy':
          return value
          break

        case 'type':
          return value
          break

        case 'length':
          return value
          break

        case 'nullable':
          return value
          break

        case 'searchable':
          return value
          break

        default:
          return value
          break

      }
    }
    , prop = key.split('-')[3]
    , newvalue = rule(prop)

  entity.config[prop] = newvalue

  // #issue: aplicar as regras para validar o retorno
  let newvalueIsValid = true

  // #pareiaqui

  newvalueIsValid ? document.getElementById('buttons').style.display = 'block' : false

  return entity

}