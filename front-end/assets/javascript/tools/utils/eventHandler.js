function eventHandler(change) {

    // #issue: convenção ou configuração? deixei convenção. Opinativo.
    let key = change.key.split('-')
        , value = change.value
        , dependency
        , rule = key => {

            let prop = key[2]

            switch (prop) {

                case 'privacy':
                    dependency = 'tem que escolher um de cada'
                    console.log('privacy dependency', dependency)
                    break;
                case 'type':
                    dependency = document.getElementById(`${key[0]}-${key[1]}-type`).selectedIndex === 1
                    console.log('type dependency', dependency)
                    break;
                case 'length':
                    dependency = document.getElementById(`${key[0]}-${key[1]}-type`).selectedIndex === 1
                    console.log('length dependency', dependency)
                    break;
                case 'nullable':
                    dependency = { arrCheckBoxNullable: document.getElementsByName('checkbox-nullable'), checked: [] }
                    for (let i in dependency) { dependency.checked.push(dependency[i].checked) }
                    console.log('nullable dependency', dependency)
                    break;
                case 'searcheable':
                    dependency = { arrCheckBoxNullable: document.getElementsByName('checkbox-searchable'), checked: [] }
                    for (let i in dependency) { dependency.checked.push(dependency[i].checked) }
                    console.log('searcheable dependency', dependency)
                    break;

                default:
                    console.log('error', key)
                    break;

            }

        }

    return rule(key)

}