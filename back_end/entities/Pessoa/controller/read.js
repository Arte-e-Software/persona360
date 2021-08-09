

/*

Entity: Pessoa
Layer: controller
Module: read.js

Namespace:
idPessoa
idTenant
nome
email
senha
DataCad
isActive

Visit https://aes.tec.br 
GitHub https://github.com/Arte-e-Software/persona360.git
Author Pedro Silva aes.tec.br@gmail.com

2021 @ SP-Brasil

Building with aes.build v1
Path: ./back_end/entities/Pessoa/read.js

*/
    

module.exports = (call, req, res) => {

// Call é o objeto de chamada da api. call = {tenant: String, entity: String, method: String} 
// tenant: objeto com os dados do tenant (ainda não está 100% definido)
// entity: nome da entidade (table) 
// methos: POST ou GET apenas
// No momento acho que poderia ser importante mas não sei exatamente porque ainda

let db = require('../../../data-source/mssql/conn').db // Esse cara pode vir no call!
,Pool = require('../../../data-source/mssql/pool')
,Model_read = require('../../../entity/Pessoa/model/read')
,params = {
 idPessoa: req.params.idPessoa}
,erro = true
;

erro = !params.idPessoa;

if (erro) {

return res.status(500).send({ erro: 'Erro em Entity: Pessoa Layer: controller Module: read.js' });

} else {

    Pool(db, Model_read(params), 

    (rows) => { 

    res.send(JSON.parse(rows));

    }, 

    (err) => { 

    res.send(err); 

});
};
};