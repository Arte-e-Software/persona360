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

const config = require('./config')
    , build = require('./lib/build/builder')
    ;

((entity) => {

        for (let i in entity) {
    
            build(config(entity[i]), success, error);
    
        };

})(require('../back_end/data-source/json/entity.json').entity);
