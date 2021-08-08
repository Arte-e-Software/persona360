module.exports = data => {

    let params = [`id${data.entity.name}: req.params.id${data.entity.name}`,`idPessoa: req.params.idPessoa`]
    , erro = [`!params.id${data.entity.name}`,`!params.idPessoa`]
    ;

    return `
    ${data.comment}
    
    module.exports = (call, req, res) => {
    
    // Call é o objeto de chamada da api. call = {tenant: String, entity: String, method: String} 
    // tenant: objeto com os dados do tenant (ainda não está 100% definido)
    // entity: nome da entidade (table) 
    // methos: POST ou GET apenas
    // No momento acho que poderia ser importante mas não sei exatamente porque ainda
    
    let db = require('../../../data-source/${data.entity.db.profile}/conn').db // Pegar esse carinha a partir do tenant na versão 2.0!
    ,Pool = require('../../../data-source/${data.entity.db.profile}/pool')
    ,Model_${data.module} = require('../../../entity/${data.entity.name}/model/${data.module}')
    ,params = {\n ${params}}
    ,erro = true
    ;
    
    erro = ${erro.join('===')};

if (erro) {

return res.status(500).send({ erro: '${data.error}' });

} else {

    Pool(db, Model_${data.module}(params), 

    (rows) => { 

    res.send(JSON.parse(rows));

    }, 

    (err) => { 

    res.send(err); 

});
};
};`;

};