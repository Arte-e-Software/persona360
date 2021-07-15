module.exports = route = { // Objeto das rotas

    page: {
  
      home: { path: '/', router: require('../routes/pages/home'), restricted: false },
      adm: { path: '/adm', router: require('../routes/pages/adm'), restricted: false } 
  
    },
    api: {
  
    }
  
  };