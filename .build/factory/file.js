const fsCreateFile = require('../../back-end/utils/fs.create-file')
    , factory = {
        log: require('./log')
    }
    ;

module.exports = data => {

    let template = data.entity.template(data)
        , dir = `${data.entity.dir}/${data.layer}`
        , file = `${dir}/${data.file}`
        ;

        factory.log(`.builder/factory/file.js ${data.json()}`);
        return fsCreateFile(file, template);

};