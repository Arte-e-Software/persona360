let Reset = '\x1b[0m'
    , Bright = '\x1b[1m'
    ;

const fs = require('fs')
    , path = require('path')
    ;

async function build(caminho, arquivo) {

    let diretorio = path.join(__dirname, './') + caminho;

    // crio os diretórios   
    console.log(Reset, '');
    console.log(Bright, 'Criando o diretório: ' + caminho + ' ...');
    fs.mkdir(diretorio, (err) => {

        console.log('Não consegui criar '+ caminho);

    });

    console.log(Reset, '');
    // inicio os arquivos
    for (let i in arquivo) {
        console.log(Bright, 'Criando o arquivo: ' + caminho + arquivo[i]);
        fs.appendFile(caminho + arquivo[i], '', (err) => {
            if (err) { console.log(err); } else { console.log('Ok'); }
        });
    }
}

const entidade = require('./entity.json').entity
    , Config = name => {

        let prop = {

            caminho: {
                model: `back_end/model/entidade/${name}/`,
                view: `views/entidade/${name}/`,
                controller: `back_end/controller/entidade/${name}/`
            },

            arquivo: {
                model: ['create.js', 'read.js', 'update.js', 'delete.js', 'seach.js'],
                view: ['create.ejs', 'read.ejs', 'update.ejs', 'delete.ejs', 'seach.ejs'],
                controller: ['create.js', 'read.js', 'update.js', 'delete.js', 'seach.js']
            }
        };

        return prop;

    }
    ;

((entidade)=>{

    for (let i in entidade) {

    let cfg = Config(entidade[i].name)
        ;

        // Estrutura dos MODELS
        build(cfg.caminho.model, cfg.arquivo.model);

        // Estrutura das VIEWS
        build(cfg.caminho.view, cfg.arquivo.view);

        // Estrutura dos CONTROLLERS
        build(cfg.caminho.controller, cfg.arquivo.controller);

}})(entidade);