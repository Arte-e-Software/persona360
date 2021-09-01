const conn = require('../../../database/mssql/conn')

module.exports = (tenantDB, payload, res) => {

    let db = conn[tenantDB]
        , Pool = require('../../../database/mssql/Pool')
        , model = require(`../../../entities/${payload.entity}/models/${payload.module}`)
        , query = model(payload.params)
        ;

    Pool(db, query, res)

}