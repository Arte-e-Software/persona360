module.exports = data => {

    let params = [`id${data.entity}: req.params.id${data.entity}`]
        ;

    return `
${data.comment}

module.exports = (call, req, res) => {

// Call é o objeto de chamada da api. call = {tenant: String, entity: String, method: String} 
// tenant: objeto com os dados do tenant (ainda não está 100% definido)
// entity: nome da entidade (table) 
// methos: POST ou GET apenas
// No momento acho que poderia ser importante mas não sei exatamente porque ainda

let db = require('../../../data-source/${data.db.profile}/conn').db // Esse cara pode vir no call!
,Pool = require('../../../data-source/${data.db.profile}/pool')
,Model_${data.module} = require('../../../entity/${data.entity}/model/${data.module}')
,params = {\n ${params}}
,erro = true
;

erro = !params.id${data.entity};

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