function sanitizeInput(allowedchar, target) {

  let value = target.value
    , arrValue = value.split('')
    , sanitizeInputdValeu = arrValue.filter(char => { return allowedchar.indexOf(char) >= 0 })

  return sanitizeInputdValeu.join('')

}