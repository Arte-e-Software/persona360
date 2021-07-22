const tenants = require('../../../model/tenants.json')
    ;

let proxy = (tenant, res) => { // altero o nome do req para tenant a fim de facilitar o entendimento do módulo

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


    // _tenant é a configuração desse tenant
    let _tenant = tenants.tenant.find(tenant => tenant.hostname === tenant.hostname) // busco hostname nos hostnames permitidos 

        , allowed = [ // array filtro de permissõess
            _tenant.hostname === tenant.hostname, // checa hostname
            _tenant.apikey === tenant.params.apikey, // checa apikey
            tenants.method.indexOf(tenant.method) >= 0, // checa os métodos permitidos
            _tenant.entity.indexOf(tenant.query.entity) >= 0, // checa as entidades permitidas
            _tenant.cruld.indexOf(tenant.query.cruld) >= 0, // checa as ações de cruld permitidas
        ]

        , error = { // monto o objeto erro de acordo com o primeiro erro encontrado no filtro allowed
            cod: tenants.error[0][allowed.indexOf(false)],
            message: tenants.error[1][allowed.indexOf(false)]
        }

        , allow = allowed.every((i) => { return i === true }, allowed) // comparo todos os elementos da matriz allowed, se um falhar, retorna false

        , controller = require(`../entidades/${ tenant.query.entity }`) // controller da entidade

        , req = tenant // vamos voltar ao padrão do ExpressJs

        ;

    allow ? controller(_tenant, req, res) : res.status(500).json({ error: error });

};

module.exports = proxy;