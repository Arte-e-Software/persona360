(() => {

    document.getElementById('entity-btn-add').addEventListener('click', (event) => {

        event.preventDefault()

        // Boa prática armazenar os elementos manipulados pelo app
        let dom = {

            "div": {
                "main": document.getElementById('entity-div'),
                "create": document.getElementById('entity-div-create'),
                "input": {
                    "name": document.getElementById('entity-div-input-name'),
                    "namespace": document.getElementById('entity-div-input-namespace'),
                    "fields": document.getElementById('entity-div-input-fields')
                }
            },

            "input": {
                "name": document.getElementById('entity-input-name'),
                "namespace": document.getElementById('entity-input-namespace'),
                "tBodyFields": document.getElementById('entity-fields-tbody')
            }

        }
            // #issue: trocar evento enter por click num botão    
            , enterPressed = false
            , nameIsValid = false
            , namespaceIsValid = false


        // #issue: resolver o problema do foco
        let inputNameHtmlDefault = `<label for="entity-input-text-name" class="label mb-1 text-secondary"><i class="bi bi-box"></i>&nbsp;Nome</label>
                                    <input type="text" class="form-control" id="entity-input-name" value="pessoa" 
                                    placeholder = "// #issue: pesquisar no banco entidade com mesmo nome a partir do terceiro caracter digitado" >`

        // #issue: resolver o problema do foco
        let inputNamespaceHtmlDefault = `< div class="alert alert-info alert-dismissible show" role = "alert" >
                                                <strong><i class="bi bi-tags"></i>&nbsp;&nbsp;Namespace</strong><small> : id[entidade], crdate e
                                                    isactive são criados em todas as tabelas por padrão</small>
                                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                            </div >
                                            <label for="entity-namespace" class="label mb-1 text-secondary"><i
                                                    class="bi bi-tags"></i>&nbsp;Namespace</label>
                                            <textarea class="form-control" style="height: 5rem;" id="entity-input-namespace"
                                                placeholder="// #issue: analisar o namespace de todo sistema">nome, email, celular, senha</textarea>`

        dom.div.main.style.display = 'block'
        dom.div.create.style.display = 'block'
        dom.div.input.name.style.display = 'block'
        dom.input.name.focus()
        dom.input.name.addEventListener('keypress', (event) => {

            // #issue: trocar evento enter por click num botão
            enterPressed = event.code === 'Enter'

            if (enterPressed) {

                event.preventDefault()
                enterPressed = false

                // #issue: pesquisar no banco entidade com mesmo nome a partir do terceiro caracter digitado
                // #issue: não sei usar regex em 202109140107
                nameIsValid = dom.input.name.value.length > 3

                if (nameIsValid) {

                    dom.div.input.name.className = 'mb-1'
                    dom.div.input.name.innerHTML = `<span class="text-success fw-bold"><i class="bi bi-box-seam"></i>&nbsp;Nome</label> : <strong>${dom.input.name.value}</strong></span>`

                    dom.div.input.namespace.style.display = 'block'
                    dom.input.namespace.focus()
                    dom.input.namespace.addEventListener('keypress', (event) => {

                        // #issue: trocar evento enter por click num botão
                        enterPressed = event.code === 'Enter'

                        if (enterPressed) {

                            event.preventDefault()
                            enterPressed = false

                            // #issue: não sei usar regex em 202109140107
                            namespaceIsValid = dom.input.namespace.value.length >= 3

                            if (namespaceIsValid) {

                                dom.div.input.namespace.innerHTML = `<span class="text-success fw-bold"><i class="bi bi-box-seam"></i>&nbsp;Nomespace</label> : <strong>${dom.input.namespace.value}</strong></span>`
                                dom.div.input.fields.style.display = 'block'

                                try {

                                    let namespaceValue = dom.input.namespace.value
                                        , arrNamespace = namespaceValue.split(',')

                                    dom.input.tBodyFields.innerHTML = helperTbody(arrNamespace)

                                    let values = Values({

                                        arrNamespace: arrNamespace,
                                        selectPrivacy: document.getElementsByClassName('select-privacy'),
                                        selectType: document.getElementsByClassName('select-type'),
                                        inputLength: document.getElementsByClassName('input-length'),
                                        checkboxNullable: document.getElementsByClassName('checkbox-nullable'),
                                        checkboxSearcheable: document.getElementsByClassName('checkbox-searcheable')

                                    })

                                    // #issue: tenho tudo que preciso em values, aplicar a regra de negócio
                                    // estou ouvindo todos os objetos 

                                } catch (err) {

                                    alert('Erro', err, 'danger')

                                }

                            } else {

                                dim.div.input.name.innerHTML = inputNameHtmlDefault
                                dom.div.input.fields.innerHTML = ''
                                dom.input.namespace.value = ''
                                dom.div.input.namespace.style.display = 'none'
                                dom.div.input.fields.style.display = 'none'
                                // #issue: trocar evento enter por click num botão
                                dom.input.name.focus()
                            }
                        }
                    })

                } else {

                    dom.input.name.value = ''
                    dom.div.input.name.style.display = 'none'
                    dom.div.main.style.display = 'none'

                }
            }
        }
        )
    })

})()