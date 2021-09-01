/**
 * 
 * Na versão mutitenant o tenantDB será o nome do tenant e virá na req
 * 
 */
const tenantDB = 'aes';

const conn = require('../../../database/mssql/conn')
    , db = conn[tenantDB]
    , Pool = require('../../../database/mssql/Pool')
    ;

module.exports = (payload, res) => {

    let model = require(`../../../entities/${payload.entity}/models/${payload.module}`)
        , query = model(payload.params)
        ;

    Pool(db, query, res)

}