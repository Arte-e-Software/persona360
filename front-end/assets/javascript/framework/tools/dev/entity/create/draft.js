function draft(form) {

  let name = form.name.input.value

  if (name) {

    form.name.input.className = 'form-control is-valid'
    form.table.name.innerHTML = form.name.input.value
    form.namespace.input.focus()

    let fields = form.namespace.input.value

    if (fields) {

      form.namespace.input.className = 'form-control is-valid'

      let draft = {

        "name": form.name.input.value,
        "namespace": form.namespace.input.value,
        "settings": {
          "arrPrivacy": document.getElementsByClassName('select-privacy'),
          "arrType": document.getElementsByClassName('select-type'),
          "arrLength": document.getElementsByClassName('input-length'),
          "arrNullable": document.getElementsByClassName('checkbox-nullable'),
          "arrSearchable": document.getElementsByClassName('checkbox-searchable')
        },
        "target": form.fields.settings,
        "button": {
          "create": form.button.create
        }

      }

      return finish(draft)

    }
  }
}