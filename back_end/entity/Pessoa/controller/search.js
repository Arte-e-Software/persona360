
    
/*

Entity: Pessoa
Layer: controller
Module: search.js

Namespace --------------------/

idPessoa
idTenant
nome
email
senha
DataCad
isActive

/------------------------------

Visit https://aes.tec.br 
GitHub https://github.com/Arte-e-Software/aes.build.git
Author Pedro Silva aes.tec.br@gmail.com

2021 @ SP-Brasil

Building with aes.build v1
Path: pedrosilva_Sat Aug 07 2021 19:35:47 GMT-0300 (Brasilia Standard Time)

*/
    
    
    module.exports = (call, req, res) => {
    
    // Call é o objeto de chamada da api. call = {tenant: String, entity: String, method: String} 
    // tenant: objeto com os dados do tenant (ainda não está 100% definido)
    // entity: nome da entidade (table) 
    // methos: POST ou GET apenas
    // No momento acho que poderia ser importante mas não sei exatamente porque ainda
    
    let db = require('../../../data-source/mssql/conn').db // Esse cara pode vir no call!
    ,Pool = require('../../../data-source/mssql/pool')
    ,Model_search = require('../../../entity/Pessoa/model/search')
    ,params = {pesq: req.params.pesq}
    ,erro = true
    ;
    
    erro = !params.pesq;

if (erro) {

return res.status(500).send({ erro: 'Erro em Entity: Pessoa Layer: controller Module: search.js' });

} else {

    Pool(db, Model_search(params), 

    (rows) => { 

    res.send(JSON.parse(rows));

    }, 

    (err) => { 

    res.send(err); 

});
};
};