const settings = namespace => {

    let settings = []

    for (let field in namespace) {

        settings.push(`<tr>
                            <td>
                                <input class="form-control is-valid" type="text" id="field-${namespace[field].toLowerCase().trim()}-name-input" value="${namespace[field].toLowerCase().trim()}" readonly>
                            </td>
                            <td class="text-center">
                                <select class="form-select select-privacy is-valid" aria-label="lgpd" id="field-${namespace[field].toLowerCase().trim()}-privacy">
                                    <option value="pessoal">Pessoal</option>
                                    <option value="comercial">Comercial</option>
                                    <option value="sensivel" selected>Sensível</option>
                                    <option value="publico">Público</option>
                                    <option value="anomatizado">Anonimizado</option>
                                </select>
                            </td>
                            <td class="text-center">
                                <select class="form-select select-type is-valid" aria-label="lgpd" id="field-${namespace[field].toLowerCase().trim()}-type">
                                    <option value="number">Número</option>
                                    <option value="string" selected>Texto</option>
                                    <option value="date">Data</option>
                                    <option value="boolean">Booleano</option>
                                </select>
                            </td>
                            <td class="text-center">
                            <input type="number" class="form-control is-valid input-length" id="field-${namespace[field].toLowerCase().trim()}-length" value="50">
                            </td>
                            <td class="text-left mr-o pr-0">
                                <div class="form-check form-switch pr-0 mr-0 align-middle">
                                    <input class="form-check-input is-valid checkbox-nullable" type="checkbox" id="field-${namespace[field].toLowerCase().trim()}-nullable">
                                </div>
                            </td>
                            <td class="text-center" id="field-${namespace[field].toLowerCase().trim()}-searcheble">
                                <div class="form-check form-switch pr-0 mr-0 align-middle">
                                    <input class="form-check-input is-valid checkbox-searchable" type="checkbox" id="field-${namespace[field].toLowerCase().trim()}-searchable" checked>
                                </div>
                            </td>
                        </tr>`)
    }

    return settings.join('')
}