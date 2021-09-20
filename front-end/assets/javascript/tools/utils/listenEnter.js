function listenEnter(element) {

  element.input.addEventListener(element.listen, (event) => {

    // #issue: tratamento para text, number, date e boolean
    element.input.value = sanitizeInput(element.allow, element.input).split(',')

    if (event.code === 'Enter') {

      event.preventDefault()

      let len = element.input.value.length
        , min = element.input.minlength
        , max = element.input.maxlength

      erro = len < min || len > max

      if (!erro) {

        return element.enter(element)

      }

    }

  })

}