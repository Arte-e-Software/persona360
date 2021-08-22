const fsCreateFile = require('../../back_end/utils/fs.create-file');

module.exports = log => {

    let  agora = new Date()
        , instante = `${agora.getHours()}:${agora.getMinutes()}:${agora.getSeconds()}:${agora.getMilliseconds()}`
        ;

   fsCreateFile(`./_builder/.log/build.log`, `\n${instante}: ${log}`);

};