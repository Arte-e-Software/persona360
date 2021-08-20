

/*

Entity: Conteudo
Layer: controller
Module: update.js

Namespace:
idConteudo
name
idTenant
tag
subtitulo
imagem
conteudo
permitirComentarios
publicar
privado
dataInicioPublicacao
dataFinalPublicacao
idPessoa
idEscola
idCurso
DataCad
isActive

Visit https://aes.tec.br 
GitHub https://github.com/Arte-e-Software/persona360.git
Author Pedro Silva aes.tec.br@gmail.com

2021 @ SP-Brasil

Building with aes.build v1
Path: ./back_end/entities/Conteudo/update.js

*/


module.exports = (call, req, res) => {

// Call é o objeto de chamada da api. call = {tenant: String, entity: String, method: String} 
// tenant: objeto com os dados do tenant (ainda não está 100% definido)
// entity: nome da entidade (table) 
// methos: POST ou GET apenas
// No momento acho que poderia ser importante mas não sei exatamente porque ainda

let db = require('../../../database/mssql/conn').db // Esse cara pode vir no call!
,Pool = require('../../../database/mssql/pool')
,Model_update = require('../../../entities/Conteudo/model/update')
,params = {
 idConteudo: req.params.idConteudo,
 name: req.params.name
, idTenant: req.params.idTenant
, tags: req.params.tags
, subTitulo: req.params.subTitulo
, imagem: req.params.imagem
, conteudo: req.params.conteudo
, permitirComentarios: req.params.permitirComentarios
, publicar: req.params.publicar
, privado: req.params.privado
, dataInicioPublicacao: req.params.dataInicioPublicacao
, dataFinalPublicacao: req.params.dataFinalPublicacao
, idPessoa: req.params.idPessoa
, idEscola: req.params.idEscola
, idCurso: req.params.idCurso
, DataCad: req.params.DataCad
, isActive: req.params.isActive
}
,erro = true
;

erro = !name===!idTenant===!tags===!subTitulo===!imagem===!conteudo===!permitirComentarios===!publicar===!privado===!dataInicioPublicacao===false===!idPessoa===false===false===!DataCad===!isActive;

if (erro) {

return res.status(500).send({ erro: 'Erro em Entity: Conteudo Layer: controller Module: update.js' });

} else {

    Pool(db, Model_update(params), 

    (rows) => { 

    res.send(JSON.parse(rows));

    }, 

    (err) => { 

    res.send(err); 

});
};
};