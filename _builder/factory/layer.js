const file = require('../factory/file')
, factory = { log: require('../factory/log') }
;

module.exports = (layer, entity) => {

    switch (layer) {

        case 'model':
            layer = entity.layer.model;
            break;

        case 'view':
            layer = entity.layer.view;
            break;

        case 'controller':
            layer = entity.layer.controller;
            break;
     
        default:
            factory.log(`${layer}: módulo MVC desconhecido`);
            break;

    };

    let data = {};

    for (let i in layer.file) {

        factory.log(`entity: ${entity.name}, layer: ${layer.name}, module: ${layer.file[i].split('.')[0]}`);

        data = {

entity: entity,
layer: layer.name,
module: layer.file[i].split('.')[0],
file: layer.file[i],
comment: `
/*

Entity: ${entity.name}
Layer: ${layer.name}
Module: ${layer.file[i]}

Namespace:
${entity.namespace.join('\n')}

Visit https://aes.tec.br 
GitHub https://github.com/Arte-e-Software/persona360.git
Author Pedro Silva aes.tec.br@gmail.com

2021 @ SP-Brasil

Building with aes.build v1
Path: ${entity.dir}/${layer.file[i]}

*/
`, 
error: `Erro em Entity: ${entity.name} Layer: ${layer.name} Module: ${layer.file[i]}`
        };

        file(data);
        factory.log(`entity: ${entity.name}, layer: ${layer.name}`);
        
    };
};