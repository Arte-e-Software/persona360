module.exports = {

  view: {

    home: {
      path: '/',
      router: require('../routes/views/home'),
      restricted: false
    },

    adm: {
      path: '/adm',
      router: require('../routes/views/adm'),
      restricted: false
    },

    conhecer: {
      path: '/conhecer',
      router: require('../routes/views/conhecer'),
      restricted: false
    },
    //NEW_viewRoute

  },

  api: {

    tenant: {
      proxy: {
        path: '/api/v1/tenant/proxy/:apikey',
        router: require('../routes/api/proxy'),
        restricted: true
      }
    },
    //NEW_apiRoute

  },
  //NEW_typeRoute
  
};