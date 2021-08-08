
    
/*

Entity: Conteudo
Layer: controller
Module: delete.js

Namespace:
idConteudo
nome
idTenant
tag
subtitulo
imagem
conteudo
permitircomentarios
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
Path: ./back_end/build/Conteudo/delete.js

*/
    
    
    module.exports = (call, req, res) => {
    
    // Call é o objeto de chamada da api. call = {tenant: String, entity: String, method: String} 
    // tenant: objeto com os dados do tenant (ainda não está 100% definido)
    // entity: nome da entidade (table) 
    // methos: POST ou GET apenas
    // No momento acho que poderia ser importante mas não sei exatamente porque ainda
    
    let db = require('../../../data-source/mssql/conn').db // Pegar esse carinha a partir do tenant na versão 2.0!
    ,Pool = require('../../../data-source/mssql/pool')
    ,Model_delete = require('../../../entity/Conteudo/model/delete')
    ,params = {
 idConteudo: req.params.idConteudo,idPessoa: req.params.idPessoa}
    ,erro = true
    ;
    
    erro = !params.idConteudo===!params.idPessoa;

if (erro) {

return res.status(500).send({ erro: 'Erro em Entity: Conteudo Layer: controller Module: delete.js' });

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