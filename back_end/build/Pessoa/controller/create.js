

/*

Entity: Pessoa
Layer: controller
Module: create.js

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
Path: ./back_end/build/Pessoa/create.js

*/
    

module.exports = (call, req, res) => {

// Call é o objeto de chamada da api. call = {tenant: {idTenant: String, name: String, apikey: String, domain: String}, entity: String, method: String} 
// tenant: objeto com os dados do tenant (ainda não está 100% definido)
// entity: nome da entidade (table) 
// methods: POST ou GET apenas
// No momento acho que poderia ser importante mas não sei exatamente porque ainda

let db = require('../../../data-source/mssql/conn').db // Esse cara pode vir no call!
,Pool = require('../../../data-source/mssql/pool')
,Model_create = require('../../../entity/Pessoa/model/create')
,params = {
 nome: req.params.nome
,idTenant: req.params.idTenant
,email: req.params.email
,senha: req.params.senha
,DataCad: Date()
,isActive: 1
}
,erro = true
;

senha = require('crypto-js/sha256')(senha);

erro = !nome===!idTenant===!email===!senha===!DataCad===!isActive;

if (erro) {

return res.status(500).send({ erro: 'Erro em Entity: Pessoa Layer: controller Module: create.js' });

} else {

    Pool(db, Model_create(params), 

    (rows) => { 

    res.send(JSON.parse(rows));

    }, 

    (err) => { 

    res.send(err); 

});
};
};