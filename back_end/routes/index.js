module.exports = {

  home: {
    path: '/',
    router: require('./home'),
    restricted: false
  },

  quemsomos: {
    path: '/quemsomos',
    router: require('./quemsomos')

  },

  adm: {
    path: '/adm',
    router: require('./adm'),
    restricted: true
  },

  api: {
    path: '/api/v1',
    router: require('./api'),
    restricted: true
  }

};