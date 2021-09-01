function factory(){

let index = {
        
        entity: require('./entity'),
        file: require('./file'),
        layer: require('./layer'),
        table: require('./table'),
        template: require('./template'),
        log: require('./log')
}

return index;

};

module.exports = factory;