const fsCreateFile = require('../../back-end/utils/fs.create-file');

function log(log){

    let  agora = new Date()
        , instante = `${agora.getHours()}:${agora.getMinutes()}:${agora.getSeconds()}:${agora.getMilliseconds()}`
        , buildDate = agora.getFullYear() + agora.getMonth() + agora.getDate() + agora.getHours() + agora.getMinutes()
        ;

   return fsCreateFile(`../../../.doc/${buildDate}/build.log`, `\n${instante}: ${log}`);

};

module.exports = log;