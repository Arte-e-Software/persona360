const observer = (entity, json) => {
    
    let change = (entity, event, index) => {

        let setting = event.target.id.split('-')[2],
            newValue

        switch (setting) {
            case 'privacy':
                newValue = event.target.options[event.target.selectedIndex].value
                break;
            case 'type':
                newValue = event.target.options[event.target.selectedIndex].value
                break;
            case 'length':
                newValue = event.target.value
                break;
            case 'nullable':
                newValue = event.target.checked
                break;
            case 'hash':
                newValue = event.target.checked
                break;
            case 'searchable':
                newValue = event.target.checked
                break;
            default:
                newValue = undefined
                break;
        }

        entity.fields[index].settings[setting] = newValue
        json.innerHTML = pretty(entity)

    }
    for (let i = 1; i < entity.fields.length - 2; i++) {
        document.getElementById(`field-${entity.fields[i].name}-privacy`).addEventListener('change', event => {
            event.code === 'Enter' || 'NumpadEnter' ? event.preventDefault() : false
            change(entity, event, i)
        })
        document.getElementById(`field-${entity.fields[i].name}-type`).addEventListener('change', event => {
            event.code === 'Enter' || 'NumpadEnter' ? event.preventDefault() : false
            change(entity, event, i)
        })
        document.getElementById(`field-${entity.fields[i].name}-length`).addEventListener('change', event => {
            change(entity, event, i)
        })
        document.getElementById(`field-${entity.fields[i].name}-nullable`).addEventListener('change', event => {
            event.code === 'Enter' || 'NumpadEnter' ? event.preventDefault() : false
            change(entity, event, i)
        })
        document.getElementById(`field-${entity.fields[i].name}-hash`).addEventListener('change', event => {
            event.code === 'Enter' || 'NumpadEnter' ? event.preventDefault() : false
            change(entity, event, i)
        })
        document.getElementById(`field-${entity.fields[i].name}-searchable`).addEventListener('change', event => {
            event.code === 'Enter' || 'NumpadEnter' ? event.preventDefault() : false
            change(entity, event, i)
        })
    }
}