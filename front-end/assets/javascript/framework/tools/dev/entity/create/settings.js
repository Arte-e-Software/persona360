function settings(namespace) {

  let name = ''
    , tbody = []

  for (let field in namespace) {

    name = namespace[field].toLowerCase().trim()
    tbody.push(`<tr>
                            <td>
                                <input class="form-control is-valid" type="text" id="field-${name}-name-input" entityfieldformtype="text" value="${name}" readonly>
                            </td>
                            <td class="text-center" entityfieldformtype="select">
                                <select class="form-select select-privacy is-valid" aria-label="lgpd" id="field-${name}-privacy">
                                    <option value="pessoal">Pessoal</option>
                                    <option value="comercial">Comercial</option>
                                    <option value="sensivel" selected>Sensível</option>
                                    <option value="publico">Público</option>
                                    <option value="anomatizado">Anonimizado</option>
                                </select>
                            </td>
                            <td class="text-center" entityfieldformtype="select">
                                <select class="form-select select-type is-valid" aria-label="lgpd" id="field-${name}-type">
                                    <option value="number">Número</option>
                                    <option value="string" selected>Texto</option>
                                    <option value="date">Data</option>
                                    <option value="boolean">Booleano</option>
                                </select>
                            </td>
                            <td class="text-center" entityfieldformtype="number">
                            <input type="number" class="form-control is-valid input-length" id="field-${name}-length" value="50">
                            </td>
                            <td class="text-left mr-o pr-0">
                                <div class="form-check form-switch pr-0 mr-0 align-middle">
                                    <input class="form-check-input is-valid checkbox-nullable" type="checkbox" id="field-${name}-nullable" entityfieldformtype="checkbox">
                                </div>
                            </td>
                            <td class="text-center" id="field-${name}-searcheble">
                                <div class="form-check form-switch pr-0 mr-0 align-middle">
                                    <input class="form-check-input is-valid checkbox-searchable" type="checkbox" id="field-${name}-searchable" entityfieldformtype="checkbox" checked>
                                </div>
                            </td>
                        </tr>`)
  }

  return tbody.join('')
}