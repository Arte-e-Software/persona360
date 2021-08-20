const fsCreateFile = require('../../back_end/utils/fs.create-file');

module.exports = log => {

    let file = `./_builder/.log/build.log`
        , agora = new Date()
        , instante = `${agora.getHours()}:${agora.getMinutes()}:${agora.getSeconds()}:${agora.getMilliseconds()}`
        , template = `\n${instante}: ${log}`
        ;

    return fsCreateFile(file, template);

};