

/*

Entity: Pessoa
Layer: controller
Module: update.js

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
Path: pedrosilva_Thu Aug 05 2021 10:38:51 GMT-0300 (Brasilia Standard Time)

*/
    

module.exports = (tenant, req, res) => {

let db = require('../../../../db/mssql/conn').db // Pegar esse carinha a partir do tenant na versão 2.0!
,Pool = require('../../../../db/mssql/pool')
,update_ = require('../../../../controller/entity/Pessoa/update')
,idTenant = tenant.idTenant
,params = {
 idPessoa: req.params.idPessoa, nome: req.params.nome
, email: req.params.email
, senha: req.params.senha
, DataCad: req.params.DataCad
, isActive: req.params.isActive
}, 
erro = true
;

senha = require('crypto-js/sha256')(senha);

erro = !nome===!email===!senha===!DataCad===!isActive===!idTenant;

if (erro) {

return res.status(500).send({ erro: 'Erro em Entity: Pessoa Layer: controller Module: update.js' });

} else {

return Pool(db, update_(idTenant,params), res);

};
};