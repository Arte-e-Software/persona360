const entidades = require('../../../model/entidades.json')
;

let proxy = (tenant, res) => {

    let allowed
        , method = tenant.method
        , msg = 'VERBO não permitido'
        ;

    allowed = method === 'POST' || method === 'GET';

    allowed ? res.send(tenant) : res.status(500).json({ error: msg });

};

module.exports = proxy;