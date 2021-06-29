const Pool      = require('../../_db/sql/pool');
const config    = require('../../_db/sql/config');
const model     = require('../../model/psonline/prova.agendada');
const banco     = config.psonline;

function controller(req, res){

    let erro = false;
    let idCandidato = req.params.id;
    if( !idCandidato ){

        erro = true;

    }

    if( erro ){

        return res.status(500).send({ erro: 'Parâmetros obrigatórios omitidos ou em formato incorreto.' });

    } else { 

        Pool(banco, model(idCandidato), res);

    }

}

module.exports = controller;