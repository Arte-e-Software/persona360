const sanitize = (filter, input) => {
  return input.value.split('').filter(char => { return filter.indexOf(char) >= 0 }).join('')
}