module.exports = data => {

    for (let i in data.entity.fields) {

        if (data.entity.fields[i].form.type === 'password') {

            password = `${data.entity.fields[i].name} = require('crypto-js/sha256')(${data.entity.fields[i].name});`

        }

    }

    return `
${data.comment}

const conn = require('../../../database/mssql/conn')
const Pool = require('../../../database/mssql/Pool')

module.exports = (tenantDB, payload, res) => {

    let db = conn[tenantDB]
        , model = require('../../../entities/${data.entity.name} /models/${data.module}')
        , query = model(payload.params)
        ;

    return Pool(db, query, res)

}`;

};