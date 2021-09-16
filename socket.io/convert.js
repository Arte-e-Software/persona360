function convert(recordset) { rs = Recordset(recordset)

return { to: (format) => { switch (format) {

case 'json':
    // #issue: funcionalidade de copy past
    return `<div class="p-2">${JSON.stringify(recordset)}</div>`

case 'csv':
    // #issue: quebrar as linhas \n não funcionou
    // #issue: funcionalidade de copy past
    let csv = `${rs.header.join('\n')}${rs.body.join('\n')}`
    return `<div class="p-2">${csv}</div>`

case 'table':
    // #issue: paginar
    let header = rs.header.map(th => { return `<th>${th}</th>` })
        , body = rs.body.map(td => { return td })
        , tHeader = `<tr>${header.join('')}</tr>`
        , tBody = body.map(tr => { return `<tr>${tr.map(td => { return `<td>${td}</td>` }).join('')}</tr>` }).join('')

    let howmany = number => {
        let plural
        number === 1 ? plural = '' : plural = 's'
        return `${number} registro${plural}`
    }
    
    return `
    <div class="border-bottom mb-1 pb-3">Retorno: ${howmany(rs.rowcount)}</div>
    <div class="table-responsive">
        <table class="table table-striped table-hover">
        <thead>
            ${tHeader}
        </thead>
        <tbody>
            ${tBody}
        </tbody>
        </table>
    </div>
    `

default:
    return {}
        
}}}

function Recordset(recordset) {

    let firstRow = recordset[0]
        , entriesHeader = Object.entries(firstRow)
        , Header = entriesHeader.map(row => { return row[0] })
        , entriesRows = Object.entries(recordset)
        , Body = entriesRows.map(row => { let values = [], value
            for (let i in row) {
                for (let title in Header) { value = row[i][Header[title]]
                    if (value) { values.push(value) }
                }} return values })
        , header = Header.map(th => { return th })
        , body = Body.map(td => { return td })

return { "header": header, "body": body, "rowcount": body.length }

}}

module.exports = convert