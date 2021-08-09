/**
 * 
 * erro e sucesso 
 * deverão ser mais inteligentes, 
 * registrando um arquivo de log
 * 
 * */

function error(err) { console.log(err); };
function success(msg) { };

// ---------------------------------------- //

require('dotenv').config({ path: process.env.NODE_ENV === 'dev' ? '.dev.env' : '.env' });

const entity = require('./entity')
    , builder = require('./lib/build/builder')
    ;

((config) => {

        for (let i in config) {
    
            builder(entity(config[i]), success, error);
    
        };

})(require('../config.json').entity);