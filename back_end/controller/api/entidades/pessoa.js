let controller = (_tenant, req, res) => {

  res.send({ _tenant: _tenant });

};

module.exports = controller;