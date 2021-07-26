module.exports = (req, res) => {

    /**
     * A requisição precisa ter origem num hostname credenciado
     * >> req.hostname === tenants.tenant.hostname = []
     * 
     * A requisição tem que ter sido feita por um dos métodos válidos
     * >> req.method === tenants.method = []
     * 
     * A requisição tem que trazer a apikey do tenant
     * >> req.params.apikey === tenants.tenant.apikey
     * 
     * A requisição tem que trazer na query: entity e cruld (método)
     * >> req.query.entity === tenants.tenant.entity = []
     * >> req.query.cruld === tenants.tenant.cruld = []
     */

    // tenant é a configuração dos tenants
    const tenants = require('../../../model/entity/tenant/tenants.json')

        // busco este tenant nos hostnames permitidos 
        , tenant = tenants.tenant.find(tenant => tenant.hostname === req.hostname)

        // array filtro de permissõess
        , filter = [

            // checa hostname
            tenant.hostname === req.hostname, // POS 0

            // checa apikey
            tenant.apikey === req.params.apikey, // POS 1

            // checa os métodos permitidos
            tenants.method.indexOf(req.method) >= 0, // POS 2

            // checa as entidades permitidas
            tenant.entity.indexOf(req.query.entity) >= 0, // POS 3

            // checa as ações de cruld permitidas
            tenant.cruld.indexOf(req.query.cruld) >= 0 // POS 4

        ]

        // monto o objeto erro de acordo com o primeiro erro encontrado no filtro
        , error = {
            cod: tenants.error[0][filter.indexOf(false)],
            message: tenants.error[1][filter.indexOf(false)]
        }

        // comparo todos os elementos da matriz filter, se um falhar, retorna false
        , allow = filter.every((i) => { return i === true }, filter)

        // controller do END POINT
        , controller = require(`../entity/${req.query.entity}/${req.query.cruld}`)

        ;
        
    // Se passar nos filtros, segue para o controller, caso contrário retorna 500 com error
    allow ? controller(tenant, req, res) : res.status(500).json({ error: error });

};