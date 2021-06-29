const Pool      = require('../../_db/sql/pool');
const config    = require('../../_db/sql/config');
const model     = require('../../model/psonline/vestibular.curso');
const banco     = config.psonline;

function controller(req, res){

    let erro = false;
    let ano, semestre, codcurso;

    if( req.params.q.split(',').length == 3 ){

        ano       = req.params.q.split(',')[0];
        semestre  = req.params.q.split(',')[1];
        codcurso  = req.params.q.split(',')[2];

        if(ano.length != 4 || semestre.length != 1){ erro = true; }

    } else { erro = true; }
        
    if( erro ){

        return res.status(500).send({ erro: 'Parâmetros obrigatórios omitidos ou em formato incorreto.' });

    } else {

        Pool(banco, model(ano, semestre, codcurso), res);

    }

}

module.exports = controller;