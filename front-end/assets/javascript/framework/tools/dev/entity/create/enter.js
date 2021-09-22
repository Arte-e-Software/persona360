const enter = (form, element) => {

    form[element].input.addEventListener(form[element].trigger, (event) => {

        // #issue: tratamento pronto para text e number, falta date e boolean
        form[element].input.value = sanitize(form[element].filter, form[element].input).split(',')

        if (event.code === 'Enter' || event.code === 'NumpadEnter') {

            event.preventDefault()

            let len = form[element].input.value.length,
                min = form[element].input.getAttribute('minlength'),
                max = form[element].input.getAttribute('maxlength')

            erro = len < min || len > max

            if (erro) {

                if (len === 0) {

                    form[element].input.focus()
                    form[element].input.value = ''
                    form[element].input.className = 'form-control is-invalid'
                    form.fields.settings.innerHTML = ''
                    form.button.create.setAttribute('disabled', true)

                }

            } else {

                return entity(form)

            }
        }
    })
}