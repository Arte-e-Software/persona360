const fsCreateFile = require('../../back_end/utils/fs.create-file')
    , factory = {
        log: require('../factory/log')
    }
    ;

module.exports = data => {

    let template = data.entity.template(data)
        , dir = `${data.entity.dir}/${data.layer}`
        , file = `${dir}/${data.file}`
        ;

        factory.log(`file: ${data.layer}, data: (${data})`);
        return fsCreateFile(file, template);

};