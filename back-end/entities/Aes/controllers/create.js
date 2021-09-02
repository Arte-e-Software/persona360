const conn = require('../../../database/mssql/conn')
const Pool = require('../../../database/mssql/Pool')

module.exports = (tenantDB, payload, res) => {

    let db = conn[tenantDB]
        , model = require(`../../../entities/${payload.entity}/models/${payload.module}`)
        , query = model(payload.params)
        ;

    return Pool(db, query, res)

}