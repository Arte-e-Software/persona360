function Input(event) {

  // #nota: regra de convenção do framework
  let arr = event.target.id.split('-')
  return {
    field: arr[3],
    type: arr[1],
    value: event.target.value
  }

}