const express = require('express')
    ,router = express.Router()
    ,controller = require('../../../controller/api/proxy')
    ;

/**
 * A idéia é expor apenas um END POINT. 
 * Inicialmente em julho de 2021 penso em usar minha propria abordagem de API, não seguindo os padrões rest full, 
 * herdado do graphql essa idéia porém não a utilizando
 * um protocolo baseado em JSON mas proprietário e mais simples
 * Se vier a precisar tratar o VERBO, posso fazê-lo no controller e não na rota
 * Uma rota é só um caminhão com carga numa rodovia e o controller é o hub que determina para onde a carga deve ser levada 
 * e para onde o caminhão tem que ir depois da carga entrega e com a carga de retorno
 * Nesse modelo abstraio tudo que for transportado entre o browser e o servidor eu chamo de PAYLOAD
 * o Payload sempre será um JSON, exceto quando imagens, arquivos, etc
 * o payload será usado para autenticar a rota
 */

router.all('/api/v1/tenant/proxy/:apikey', (req, res) => {
  
    let tenant = {
        baseUrl: req.baseUrl,
        body: req.body,
        cookies: req.cookies,
        hostname: req.hostname,
        ip: req.ip,
        method: req.method,
        originalUrl: req.originalUrl,
        params: req.params,
        path: req.path,
        protocol: req.protocol,
        query: req.query,
        route: req.route,
        secure: req.secure,
        signedCookies: req.signedCookies,
        subdomains: req.subdomains,
        xhr: req.xhr
    };

    controller(tenant, res);

});

module.exports = router;