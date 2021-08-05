

/*

Entity: Curso
Layer: controller
Module: search.js

Namespace --------------------/

idCurso
idTenant
nome
idEscola
idPessoa
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
,search_ = require('../../../../controller/entity/Curso/search')
,idTenant = tenant.idTenant
,params = {
 pesq: req.params.pesq}
,erro = true
;

erro = !idTenant;

if (erro) {

return res.status(500).send({ erro: 'Erro em Entity: Curso Layer: controller Module: search.js' });

} else {

return Pool(db, search_(idTenant,params), res);

};
};