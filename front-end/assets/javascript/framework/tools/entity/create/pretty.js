const pretty = entity => {

  let fields = []

  for (let field in entity.fields) {

    fields.push(

      `<li>&nbsp;&nbsp;&nbsp;{ "name": "${entity.fields[field].name}"</li>
                <ul class="list-unstyled">
                <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"settings": {</li>
                  <ul class="list-unstyled">
                  <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"privacy": "${entity.fields[field].settings.privacy}"</li>
                  <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "${entity.fields[field].settings.type}"</li>
                  <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"length": "${entity.fields[field].settings.length}"</li>
                  <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"nullable": "${entity.fields[field].settings.nullable}"</li>
                  <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"searchable": "${entity.fields[field].settings.searchable}"</li>
                  </ul>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</li>
                <li>&nbsp;&nbsp;&nbsp;}</li>`
    )
  }

  return `
          <ul class= "list-unstyled">
            <li>{ "entity": { </li>
            <li>&nbsp;&nbsp;"name": "${entity.name}"</li>
            <li>&nbsp;&nbsp;"namespace": "${entity.namespace}"</li>
            <li>&nbsp;&nbsp;"fields": [
              <ul class="list-unstyled">
                ${fields}
                </ul>
              </ul>
              <li>&nbsp;&nbsp;]</li>
            </li>
          <li>}</li>
          </ul> `
}