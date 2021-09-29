const pretty = entity => {
  if (entity.fields) {
    let fields = [], _ = '&nbsp;&nbsp;&nbsp;&nbsp;'
    for (let field in entity.fields) {
      let coma = ','
      if (field > entity.fields.length - 2) { coma = '' }
      fields.push(`
    ${_ + _}{
    ${_ + _}"name": "${entity.fields[field].name}",
    ${_ + _}"settings": {
        ${_ + _ + _}"privacy": "${entity.fields[field].settings.privacy}",
        ${_ + _ + _}"type": "${entity.fields[field].settings.type}",
        ${_ + _ + _}"length": "${entity.fields[field].settings.length}",
        ${_ + _ + _}"nullable": "${entity.fields[field].settings.nullable}",
        ${_ + _ + _}"hash": "${entity.fields[field].settings.hash}",
        ${_ + _ + _}"searchable": "${entity.fields[field].settings.searchable}"
    ${_ + _ + _}}
    ${_ + _}}${coma}`
      )
    }
    return `
<textarea id="entity-${entity.name}-json" class="form-control bg-light text-dark" style="height: 17rem;">
{
${_}"name": "${entity.name}",
${_}"namespace": "${entity.namespace}",
${_}"fields": [ ${fields.join('')}
${_}]
}
</textarea>`
  }
}