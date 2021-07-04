const ip = require("ip"); 

function proxy(req, res){

    console.log(`tenant: ${ req.rawHeaders[1] }`)

    res.send(`tenant: ${ req.rawHeaders[1] }`);

};

module.exports = proxy;