const Pool    = require('../../_db/sql/pool');
const config  = require('../../_db/sql/config');
const model   = require('../../model/bolsaenem/agendamento.read');
const banco   = config.psonline;

function controller(req, res){

    let erro = false
    let ano, semestre, DataMatricula, DataMatriculaQuery;

    if(req){
        
        ano = req.query.ano;
        semestre = req.query.semestre;
        DataMatricula = req.query.DataMatricula;;


        if(!ano || !semestre || !DataMatricula){

            erro = true;

        }
   
    } else {
        
        switch(DataMatricula){
            case '*':
            DataMatriculaQuery = '';
            break;
            case 'null':
            DataMatriculaQuery = ' AND DataMatricula IS NULL ';
            break;
            default:
            DataMatriculaQuery = ` AND DataMatricula =  '${ DataMatricula }' `;
        }
        

    }
    
    if(erro) {

        return res.status(500).send({ erro: 'Parâmetros obrigatórios omitidos ou em formato incorreto.' });

    } else {

        Pool(banco, model(ano, semestre, DataMatriculaQuery), res);

    }
        
}

module.exports = controller;