

/*

Entity: Conteudo
Layer: controller
Module: create.js

Namespace --------------------/

idConteudo
idTenant
nome
titulo
subtitulo
imagem
conteudo
comentar
publicar
privado
dataInicioPublicacao
dataFinalPublicacao
idPessoa
idEscola
idCurso
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
,Model_create = require('../../../entity/Conteudo/model/create')
,params = {
 tag: req.params.tag
,titulo: req.params.titulo
,subTitulo: req.params.subTitulo
,imagem: req.params.imagem
,conteudo: req.params.conteudo
,comentar: req.params.comentar
,publicar: req.params.publicar
,privado: req.params.privado
,dataInicioPublicacao: Date()
,dataFinalPublicacao: req.params.dataFinalPublicacao
,idPessoa: req.params.idPessoa
,idEscola: req.params.idEscola
,idCurso: req.params.idCurso
,DataCad: Date()
,isActive: 1
}
,erro = true
;



erro = !tag===!titulo===!subTitulo===!imagem===!conteudo===!comentar===!publicar===!privado===!dataInicioPublicacao===false===!idPessoa===false===false===!DataCad===!isActive;

if (erro) {

return res.status(500).send({ erro: 'Erro em Entity: Conteudo Layer: controller Module: create.js' });

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