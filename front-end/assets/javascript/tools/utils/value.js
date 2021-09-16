function Values(params) {

    // #issue: Values não precisa a conhecer o conteúdo de params, está tudo em obj
    // uma vez que eles já estão em obj
    let obj = Object.entries(params)
        .map(param => {

            return { key: param[0], value: param[1] }

        })

    let valueOf = []
        // #issue: Values não precisa a conhecer o conteúdo de params, está tudo em obj
        , arrNamespace = params.arrNamespace
        , selectPrivacy = params.selectPrivacy
        , selectType = params.selectType
        , inputLength = params.inputLength
        , checkboxNullable = params.checkboxNullable
        , checkboxSearcheable = params.checkboxSearcheable

    for (field = 0; field < arrNamespace.length; field++) {

        selectPrivacy[field].addEventListener('change', event => {

            console.log(event)

            event.preventDefault()
            // #issue: pensar melhor
            let change = { "key": event.target.id, "value": event.target.options[event.target.selectedIndex].value }
            eventHandler(change)

        })

        selectType[field].addEventListener('change', event => {

            console.log(event)

            event.preventDefault()
            // #issue: pensar melhor
            // #issue: tratar o readonly de length
            let change = { "key": event.target.id, "value": event.target.options[event.target.selectedIndex].value }
            eventHandler(change)

        })

        inputLength[field].addEventListener('keyup', event => {

            console.log(event)

            event.preventDefault()
            // #issue: pensar melhor
            let change = { "key": event.target.id, "value": event.target.value }
            eventHandler(change)

        })

        checkboxNullable[field].addEventListener('change', event => {

            console.log(event)

            event.preventDefault()
            // #issue: pensar melhor
            let change = { "key": event.target.id, "value": event.target.checked }
            eventHandler(change)

        })

        checkboxSearcheable[field].addEventListener('change', event => {

            event.preventDefault()
            // #issue: pensar melhor
            let change = { "key": event.target.id, "value": event.target.checked }
            eventHandler(change)

        })

        valueOf.push({
            field: arrNamespace[field],
            values: {
                selectPrivacy: selectPrivacy[field].options[selectPrivacy[field].selectedIndex].value,
                selectType: selectType[field].options[selectType[field].selectedIndex].value,
                inputLength: inputLength[field].value,
                checkboxNullable: checkboxNullable[field].value,
                checkboxSearcheable: checkboxSearcheable[field].value
            }
        })

    }

    return valueOf

}