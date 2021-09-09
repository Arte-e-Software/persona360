const { map } = require("mssql")

function convert(recordset) {

    rs = Recordset(recordset)

    return {

        to: (format) => {

            switch (format) {

                case 'json':
                    // #issue: funcionalidade de copy past
                    return `<div class="border border-secondary rounded p-2"><code>${JSON.stringify(recordset)}</code>`

                case 'csv':
                // #issue: quebrar as linhas
                // #issue: funcionalidade de copy past
                    let csv = `
                    ${rs.header.join('\n')}

                    ${rs.body.join('\n')}
                    `
                    return `<div class="border border-secondary rounded p-2"><code>${csv}</code>`

                case 'table':

                    let header = rs.header.map(th => { return `<th>${th}</th>` })
                        , body = rs.body.map(td => { return td })
                        , tHeader = `<tr>${header.join('')}</tr>`
                        , tBody = body.map(tr => { return `<tr>${tr.map(td => { return `<td>${td}</td>` }).join('')}</tr>` }).join('')
                    
                    // #issue: paginar
                    return `
                    
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

            }
        }
    }

    function Recordset(recordset) {

        let firstRow = recordset[0]
            , entriesHeader = Object.entries(firstRow)
            , Header = entriesHeader.map(row => { return row[0] })
            , entriesRows = Object.entries(recordset)
            , Body = entriesRows.map(row => {

                let values = [], value

                for (let i in row) {
                    for (let title in Header) {

                        value = row[i][Header[title]]
                        if (value) { values.push(value) }

                    }
                }

                return values

            })
            , header = Header.map(th => { return th })
            , body = Body.map(td => { return td })

        return { "header": header, "body": body }

    }

}

module.exports = convert