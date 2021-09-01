/**
 * 
 * Na versão mutitenant o tenantDB será o nome do tenant e virá na req
 * 
 */
const tenantDB = 'aes';
/**
 * 
 * Pedro Silva, 2021-08-31 17:25 
 * Listening: Bach, Keybord Partita No.4 em Dó Maior
 * Pianista: O Magnífico Nelson Freire
 * Piano: BMW 828
 * 
 * Romanos 8.28 'E sabemos que todas as coisas contribuem
 *               juntamente para o bem daqueles que amam a Deus, 
 *               daqueles que são chamados segundo o seu propósito.'
 * 
 * PARE e ouça
 * 
 * e programe com essa alegria
 * 
 */

const conn = require('../../../database/mssql/conn')
    , db = conn[tenantDB]
    , Pool = require('../../../database/mssql/Pool')
    ;

module.exports = async (payload, res) => {

    let model = require(`../../../entities/${payload.entity}/models/${payload.module}`)
        , query = model(payload.params)
        ;

    Pool(db, query, res)

}