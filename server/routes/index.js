/**
 * Sistema de ROTAS aes.tec.br
 * Para acrescentar recursos ao sistema, basta criar a rota e associa-la a um controller
 * Autor Pedro Silva
 * Versão: 1.0
 * Release: 15/07/2021
*/

module.exports = [
    {
        route: '/',
        controller: require('../controller/concierge')
    },
    {
        route: '/adm',
        controller: (req, res) => { res.render('adm'); }
    }
]
;