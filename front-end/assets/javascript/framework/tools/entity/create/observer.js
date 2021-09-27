const observer = entity => {

    let handler = (entity, id, newValue) => {

        let field = id.split('-')[1],
            setting = id.split('-')[2]

        console.log(entity)
        console.log(field, setting, newValue)
        // #issue: parei aqui

    }
    for (let i = 1; i < entity.fields.length - 2; i++) {
        document.getElementById(`field-${entity.fields[i].name}-privacy`).addEventListener('change', event => {
            event.code === 'Enter' || 'NumpadEnter' ? event.preventDefault() : false
            handler(entity, event.target.id, event.target.options[event.target.selectedIndex].value)
        })

        document.getElementById(`field-${entity.fields[i].name}-type`).addEventListener('change', event => {
            event.code === 'Enter' || 'NumpadEnter' ? event.preventDefault() : false
            handler(entity, event.target.id, event.target.options[event.target.selectedIndex].value)
        })
        document.getElementById(`field-${entity.fields[i].name}-length`).addEventListener('change', event => {
            handler(entity, event.target.id, event.target.value)
        })
        document.getElementById(`field-${entity.fields[i].name}-nullable`).addEventListener('change', event => {
            event.code === 'Enter' || 'NumpadEnter' ? event.preventDefault() : false
            handler(entity, event.target.id, event.target.checked)
        })
        document.getElementById(`field-${entity.fields[i].name}-hash`).addEventListener('change', event => {
            event.code === 'Enter' || 'NumpadEnter' ? event.preventDefault() : false
            handler(entity, event.target.id, event.target.checked)
        })
        document.getElementById(`field-${entity.fields[i].name}-searchable`).addEventListener('change', event => {
            event.code === 'Enter' || 'NumpadEnter' ? event.preventDefault() : false
            handler(entity, event.target.id, event.target.checked)
        })
    }
}