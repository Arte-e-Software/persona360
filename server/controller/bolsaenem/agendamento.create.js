const Pool    = require('../../_db/sql/pool');
const config  = require('../../_db/sql/config');
const model   = require('../../model/bolsaenem/agendamento.create');
const banco   = config.psonline;

function controller(req, res){

    let erro = false;
    let nome, celular, email, mediaEnem, bolsaEnem, ano, semestre;

    if(req){
        
        nome = req.query.nome;
        celular = req.query.celular;
        email = req.query.email;
        mediaEnem = req.query.mediaEnem;
        bolsaEnem = req.query.bolsaEnem;
        ano = req.query.ano;
        semestre = req.query.semestre;

        if(!nome || !celular || !email || !mediaEnem || !bolsaEnem || !ano || !semestre){

            erro = true;

        }
   
    } else {

        erro = true;

    }
    
    if(erro) {

        return res.status(500).send({ erro: 'Parâmetros obrigatórios omitidos ou em formato incorreto.' });

    } else {

        Pool(banco, model(nome, celular, email, mediaEnem, bolsaEnem, ano, semestre), res);

    }
        
}

module.exports = controller;