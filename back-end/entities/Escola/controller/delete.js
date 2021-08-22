
    
/*

Entity: Escola
Layer: controller
Module: delete.js

Namespace:
idEscola
name
idTenant
idPessoa
DataCad
isActive

Visit https://aes.tec.br 
GitHub https://github.com/Arte-e-Software/persona360.git
Author Pedro Silva aes.tec.br@gmail.com

2021 @ SP-Brasil

Building with aes.build v1
Path: ./back_end/entities/Escola/delete.js

*/

    
    module.exports = (call, req, res) => {
    
    // Call é o objeto de chamada da api. call = {tenant: String, entity: String, method: String} 
    // tenant: objeto com os dados do tenant (ainda não está 100% definido)
    // entity: nome da entidade (table) 
    // methos: POST ou GET apenas
    // No momento acho que poderia ser importante mas não sei exatamente porque ainda
    
    let db = require('../../../database/mssql/conn').db // Pegar esse carinha a partir do tenant na versão 2.0!
    ,Pool = require('../../../database/mssql/pool')
    ,Model_delete = require('../../../entities/Escola/model/delete')
    ,params = {
 idEscola: req.params.idEscola,idPessoa: req.params.idPessoa}
    ,erro = true
    ;
    
    erro = !params.idEscola===!params.idPessoa;

if (erro) {

return res.status(500).send({ erro: 'Erro em Entity: Escola Layer: controller Module: delete.js' });

} else {

    Pool(db, Model_delete(params), 

    (rows) => { 

    res.send(JSON.parse(rows));

    }, 

    (err) => { 

    res.send(err); 

});
};
};