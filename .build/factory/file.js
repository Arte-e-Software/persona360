const fsCreateFile = require('../../back_end/utils/fs.create-file')
    , factory = {
        log: require('./log')
    }
    ;

module.exports = data => {

    let template = data.entity.template(data)
        , dir = `${data.entity.dir}/${data.layer}`
        , file = `${dir}/${data.file}`
        ;

        factory.log(`// _builder/factory/file.js //  ${data.entity.name}: ${data.layer}({${data}}) `);
        return fsCreateFile(file, template);

};