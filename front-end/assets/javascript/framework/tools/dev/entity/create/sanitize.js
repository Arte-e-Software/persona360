function sanitize(filter, input) {

  let value = input.value
    , dirty = value.split('')
    , clean = dirty.filter(char => { return filter.indexOf(char) >= 0 })

  return clean.join('')

}