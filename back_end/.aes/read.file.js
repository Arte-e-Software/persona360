const fs = require('fs').promises
    , path = require('path')
    ;

async function read(caminho, arquivo, callback) {

    let Arquivo = await fs.readFile(path.join(__dirname, '../../', caminho, arquivo))
        ;

        fs.mkdir(path.join(__dirname, '../../') + 'back_end/controller/temp')

        callback(Arquivo.toString());
}

module.exports = read;
