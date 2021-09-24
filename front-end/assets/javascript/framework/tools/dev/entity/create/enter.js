const enter = (form, element) => {

  let trigger = 'click',
    placeholder = form[element].input.getAttribute('placeholder')

  switch (form[element].input.id.split('-')[1]) {
    case 'text':
      trigger = 'keypress'
      break;
    case 'textarea':
      trigger = 'keypress'
      break;
    default:
      alert('dev', `usando default (click) como trigger para type: ${type}`, 'secondary')
      break;
  }

  form[element].input.addEventListener('focus', () => {

    form[element].input.className = 'form-control is-invalid '

  })

  form[element].input.addEventListener(trigger, (event) => {

    // #issue: tratamento pronto para text e number, falta date e boolean
    form[element].input.value = sanitize(form[element].filter, form[element].input).split(',')
    form[element].input.setAttribute('placeholder', `${form[element].input.value} || Enter para limpar`)

    if (event.code === 'Enter' || event.code === 'NumpadEnter') {

      event.preventDefault()

      let len = form[element].input.value.length,
        min = form[element].input.getAttribute('minlength'),
        max = form[element].input.getAttribute('maxlength'),
        erro = len < min || len > max

      if (erro) {

        if (len === 0) {

          form[element].input.focus()
          form[element].input.setAttribute('value', '')
          form[element].input.setAttribute('placeholder', placeholder)
          form[element].input.className = 'form-control is-invalid '
          form.fields.settings.innerHTML = ''
          form.button.create.setAttribute('disabled', true)

        }

        return

      } else {

        return entity(form)

      }

    }

  })
}