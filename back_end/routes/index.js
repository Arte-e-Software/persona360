/**
 * Em hardcode a versão atual da API
 * Encontrar uma maneira mais 'bacaninha' de fazer isso depois
 */
const api = {

  version: 'v1'

};

// Módulo de configuração das rotas, dependência do app.js
module.exports = { 

  view: {

    /**
     * Configure as rotas das VIEWS aqui e depois LEMBRE de registrá-las no app.js
     * Exemplo:
     * app.get(view.home.route, view.home.router);
     * Lembre-se que o Express aceita rotas com regex e.g.: /^a%/ => qualquer rota que comece com a letra a
     */

    home: {
      path: '/',
      router: require('../routes/views/home'),
      restricted: false
    },

    register: {
      path: '/register',
      router: require('../routes/views/register'),
      restricted: false
    },

    adm: {
      path: '/adm',
      router: require('../routes/views/adm'),
      restricted: false
    }

  },

  api: {

    /**
     * Configure as rotas da API aqui e depois LEMBRE de registrá-las no app.js
     * Exemplo:
     * app.get(api.tenant.proxy.route, api.tenant.proxy.router);
     * LEMBRE-SE que o proxy é quem faz a orquestração dos verbos HTTP
     * Então no app.js registre apenas a rota app.get()
     * A versão da API está em hardcode numa constante na linha 7
     */

    tenant: {
      proxy: {
        path: `/api/${api.version}/tenant/proxy`,
        router: (req, res) => { res.send(req.rawHeaders), console.log(req); },
        restricted: true
      }
    },

    persona: {
      proxy: {
        path: `/api/${api.version}/persona/proxy`,
        router: (req, res) => { res.send(req.rawHeaders), console.log(req); },
        restricted: true
      }
    }
    
  }
};