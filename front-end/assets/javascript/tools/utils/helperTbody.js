function helperTbody(arrNamespace) {

    let fieldname = ''
        , tbodyFieldsHtml = []


    for (i = 0; i < arrNamespace.length; i++) {

        fieldname = arrNamespace[i].toLowerCase().trim()

        tbodyFieldsHtml.push(`<tr>
                                        <td>
                                            <input class="form-control is-valid" type="text" id="field-${fieldname}-name-input" entityfieldformtype="text" value="${fieldname}" readonly>
                                        </td>
                                        <td class="text-center" entityfieldformtype="select">
                                            <select class="form-select select-privacy is-invalid" aria-label="lgpd" id="field-${fieldname}-privacy">
                                                <option value="">Dado:</option>
                                                <option value="pessoal">Pessoal</option>
                                                <option value="comercial">Comercial</option>
                                                <option value="sensivel">Sensível</option>
                                                <option value="publico">Público</option>
                                                <option value="anomatizado">Anonimizado</option>
                                            </select>
                                        </td>
                                        <td class="text-center" entityfieldformtype="select">
                                            <select class="form-select select-type is-invalid" aria-label="lgpd" id="field-${fieldname}-type">
                                                <option value="">Tipo:</option>
                                                <option value="number">Número</option>
                                                <option value="string">Texto</option>
                                                <option value="date">Data</option>
                                                <option value="boolean">Booleano</option>
                                            </select>
                                        </td>
                                        <td class="text-center" entityfieldformtype="number">
                                        <input type="number" class="form-control is-invalid input-length" id="field-${fieldname}-length" value="">
                                        </td>
                                        <td class="text-left mr-o pr-0">
                                            <div class="form-check form-switch pr-0 mr-0 align-middle">
                                                <input class="form-check-input is-invalid checkbox-nullable" type="checkbox" id="field-${fieldname}-nullable" entityfieldformtype="checkbox" checked>
                                            </div>
                                        </td>
                                        <td class="text-center" id="field-${fieldname}-searcheble">
                                            <div class="form-check form-switch pr-0 mr-0 align-middle">
                                                <input class="form-check-input is-invalid checkbox-searcheable" type="checkbox" id="field-${fieldname}-searchable" entityfieldformtype="checkbox" checked>
                                            </div>
                                        </td>
                                    </tr>`)
    }

    return tbodyFieldsHtml.join('')
}