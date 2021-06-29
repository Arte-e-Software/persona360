const Pool    = require('../../_db/sql/pool');
const config  = require('../../_db/sql/config');
const model   = require('../../model/cursos/pre.inscricao/contato.insert');
const banco   = config.aes;

function controller(req, res){

    let nome     = req.query.nome;
    let email    = req.query.email;
    let mensagem = req.query.mensagem;
  
    console.log(nome + ' '+ email + ' ' + mensagem);

    let erro = false;
    if(!nome){ erro = true; }
    if(!email){ erro = true; }
    if(!mensagem){ erro = true; }

    if(erro){ 

        return res.status(500).send({ erro: 'Parâmetros obrigatórios foram omitidos.' });

    } else { 

        return Pool(banco, model(nome, email, mensagem), res);

    }

}

module.exports = controller;