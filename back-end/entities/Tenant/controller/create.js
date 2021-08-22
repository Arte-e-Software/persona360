

/*

Entity: Tenant
Layer: controller
Module: create.js

Namespace:
idTenant
name
email
senha
DataCad
isActive

Visit https://aes.tec.br 
GitHub https://github.com/Arte-e-Software/persona360.git
Author Pedro Silva aes.tec.br@gmail.com

2021 @ SP-Brasil

Building with aes.build v1
Path: ./back_end/entities/Tenant/create.js

*/


module.exports = (call, req, res) => {

// Call é o objeto de chamada da api. call = {tenant: {idTenant: String, name: String, apikey: String, domain: String}, entity: String, method: String} 
// tenant: objeto com os dados do tenant (ainda não está 100% definido)
// entity: nome da entidade (table) 
// methods: POST ou GET apenas
// No momento acho que poderia ser importante mas não sei exatamente porque ainda

let db = require('../../../database/mssql/conn').db // Esse cara pode vir no call!
,Pool = require('../../../database/mssql/pool')
,Model_create = require('../../../entities/Tenant/model/create')
,params = {
 name: req.params.name
,email: req.params.email
,password: req.params.password
,DataCad: Date()
,isActive: 1
}
,erro = true
;

password = require('crypto-js/sha256')(password);

erro = !name===!email===!password===!DataCad===!isActive;

if (erro) {

return res.status(500).send({ erro: 'Erro em Entity: Tenant Layer: controller Module: create.js' });

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