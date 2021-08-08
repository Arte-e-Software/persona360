const maker = require('./fs.create-file');

module.exports = (layer, entity, success, error) => {
    
    let dir = `${entity.dir}/${layer.name}`
        , template = entity.template
        , data = {}
        , file = `Ocorreu um erro no template de ${entity.name}/${layer.name}/layer.file[0]`
        ;

    for (let i in layer.file) {

        data = {

            entity: entity,
            layer: layer.name,
            module: layer.file[i].split('.')[0],
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
    `, error: `Erro em Entity: ${entity.name} Layer: ${layer.name} Module: ${layer.file[i]}`
    };

    file = `${dir}/${layer.file[i]}`;
    maker(file, template(data), success, error);

    };
};