const Pool    = require('../../_db/sql/pool');
const config  = require('../../_db/sql/config');
const model   = require('../../model/psonline/inscricao.checar');
const banco   = config.psonline;

function controller(req, res){

    let erro = false;
    let cpf, ano, semestre, queryData;

    if(req){
        
        cpf       = req.params.q.split(',')[0];
        ano       = req.params.q.split(',')[1];
        semestre  = req.params.q.split(',')[2];
        queryData = '';

        if(cpf.length != 11){ erro = true; } 
        if(!erro){
            if(ano){ if(ano.length != 4){ erro = true; }}
            if(ano){ if(semestre){ if(semestre.length != 1){ erro = true; }}}
        }
   
    } else {
        erro = true;
    }
    
    if(erro) {

        return res.status(500).send({ erro: 'Parâmetros obrigatórios omitidos ou em formato incorreto.' });

    } else {

        if(ano){ queryData += ` AND P.ano = '${ ano }'`; }
        if(ano){ if(semestre){ queryData += ` AND P.semestre = '${ semestre }'`; }}

        //return res.status(200).send({ cpf: cpf, ano: ano, semestre: semestre, queryData: queryData });

        Pool(banco, model(cpf, queryData), res);

    }
        
}

module.exports = controller;