function enter(form, element) {

  form[element].input.addEventListener(form[element].trigger, (event) => {

    // #issue: tratamento pronto para text e number, falta date e boolean
    form[element].input.value = sanitize(form[element].filter, form[element].input).split(',')

    // #issue: esse módulo se chama enter.js porque é disparado com a tecla enter
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {

      event.preventDefault()

      let len = form[element].input.value.length
        , min = form[element].input.getAttribute('minlength')
        , max = form[element].input.getAttribute('maxlength')

      erro = len < min || len > max

      if (!erro) {

        return form[element].draft(form)

      }

    }
  })
}