const enter = (form, element) => {
  let trigger = 'change',
    type = form[element].input.id.split('-')[1]
  switch (type) {
    case 'text':
      trigger = 'keypress'
      break;
    case 'textarea':
      trigger = 'keypress'
      break;
    default:
      alert('dev', `usando default (change) como trigger para type: ${type}`, 'secondary')
      break;
  }
  form[element].input.addEventListener('focus', () => {
    form[element].input.className = 'form-control is-invalid '
  })
  form[element].input.addEventListener(trigger, (event) => {
    // #issue: tratamento pronto para text e number, falta date e boolean
    form[element].input.value = sanitize(form[element].filter, form[element].input).split(',')
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      event.preventDefault()
      let len = form[element].input.value.length,
        min = form[element].input.getAttribute('minlength'),
        max = form[element].input.getAttribute('maxlength'),
        erro = len < min || len > max
      if (erro) {
        if (len === 0) {
          form[element].input.focus()
          form[element].input.value = ''
          form[element].input.className = 'form-control is-invalid '
          form.fields.settings.innerHTML = ''
          form.button.create.setAttribute('disabled', true)
        }
        return
      } else {
        return fields(form)
      }
    }
  })
}