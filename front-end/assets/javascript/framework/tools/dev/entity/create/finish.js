function finish(draft) {

  let settings = draft.settings
    , namespace = draft.namespace.split(',')
    , arrPrivacy = settings.arrPrivacy
    , arrType = settings.arrType
    , arrLength = settings.arrLength
    , arrNullable = settings.arrNullable
    , arrSearchable = settings.arrSearchable
    , target = draft.target
    , entity = {
      "name": draft.name,
      "namespace": draft.namespace,
      "fields": []
    }

  target.innerHTML = settings(namespace)
  arrPrivacy[0].focus()

  for (let field in namespace) {

    entity.fields.push({

      "name": namespace[field],
      "settings": {
        "privacy": arrPrivacy[field].options[arrPrivacy[field].selectedIndex].value,
        "type": arrType[field].options[arrType[field].selectedIndex].value,
        "length": arrLength[field].value,
        "nullable": arrNullable[field].value,
        "searchable": arrSearchable[field].value
      }

    })

  }

  // #issue: parei aqui. Tem que aplicar as regras de settingsuração
  console.log(entity)

}