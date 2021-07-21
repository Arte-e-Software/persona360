const tenants = require('../../../model/tenants.json')
    ;

let proxy = (tenant, res) => {

    /**
     * A requisição precisa ter origem num hostname credenciado
     * >> tenant.hostname === tenants.tenant.hostname = []
     * 
     * A requisição tem que ter sido feita por um dos métodos válidos
     * >> tenant.method === tenants.method = []
     * 
     * A requisição tem que trazer a apikey do tenant
     * >> tenant.params.apikey === tenants.tenant.apikey
     * 
     * A requisição tem que trazer na query: entity e cruld (método)
     * >> tenant.query.entity === tenants.tenant.entity = []
     * >> tenant.query.cruld === tenants.tenant.cruld = []
     */

    const thisHostname = tenant.hostname;

    let _tenant = tenants.tenant.find(tenant => tenant.hostname === thisHostname)
    , allowed = [
        _tenant.hostname === tenant.hostname,
        _tenant.apikey === tenant.params.apikey,
        tenants.method.indexOf(tenant.method) >= 0,
        _tenant.entity.indexOf(tenant.query.entity) >= 0,
        _tenant.cruld.indexOf(tenant.query.cruld) >= 0,
    ]
    , error = {
        cod: tenants.error[0][allowed.indexOf(false)],
        message: tenants.error[1][allowed.indexOf(false)]
    }
    , allow = allowed.every((i)=>{return i === true}, allowed)
    ;

    true ? res.send({ tenant: tenant, _tenant: _tenant, allowed: allowed, error: error, allow: allow }) : res.status(500).json({ error: error });

};

module.exports = proxy;