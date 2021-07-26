let controller = (_tenant, tenant, res) => {

    res.send({ tenant: tenant, _tenant: _tenant });
  
  };
  
  module.exports = controller;