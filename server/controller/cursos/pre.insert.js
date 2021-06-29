const Pool    = require('../../_db/sql/pool');
const config  = require('../../_db/sql/config');
const model   = require('../../model/cursos/pre.inscricao/pre.inscricao.insert');
const banco   = config.aes;

function controller(req, res){

    let idCurso = req.query.idCurso;
    let nome    = req.query.nome;
    let email   = req.query.email;
    let celular = req.query.celular;
  
    let erro = false;
    if(!idCurso){ erro = true; }
    if(!nome){ erro = true; }
    if(!email){ erro = true; }
    if(!celular){ erro = true; }

    if(erro){ 

        return res.status(500).send({ erro: 'Parâmetros obrigatórios foram omitidos.' });

    } else { 

        return Pool(banco, model(idCurso, nome, email, celular), res);

    }

}

module.exports = controller;