module.exports = data => {

    let fields = []
        , erro
        , password = ''
        , params = `id${data.entity.name}: req.params.id${data.entity.name},\n`
        ;

    for (let i in data.entity.fields) {

        fields.push({ name: data.entity.fields[i].name, required: !data.entity.fields[i].null, default: data.entity.fields[i].default });

        if (data.entity.fields[i].form.type === 'password') {

            password = `${data.entity.fields[i].name} = require('crypto-js/sha256')(${data.entity.fields[i].name});`

        };

    };

    erro = fields.map((field) => {

        if (field.required) {

            return `!${field.name}`;

        } else {

            return `false`;

        };

    });

    params += fields.map((field) => { return ` ${field.name}: req.params.${field.name}\n` });

    return `
${data.comment}

module.exports = (call, req, res) => {

// Call é o objeto de chamada da api. call = {tenant: String, entity: String, method: String} 
// tenant: objeto com os dados do tenant (ainda não está 100% definido)
// entity: nome da entidade (table) 
// methos: POST ou GET apenas
// No momento acho que poderia ser importante mas não sei exatamente porque ainda

let db = require('../../../data-source/${data.entity.db.profile}/conn').db // Esse cara pode vir no call!
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