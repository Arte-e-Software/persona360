const Pool = require('../../../_db/sql/pool');
const config = require('../../../_db/config');
const read = require('../../../model/cpa/respondente/read');
const banco = config.locaweb;

function controller(req, res) {

    //console.log(req);

    let erro = false;
    let cpa, ano, semestre, agente, matricula, turma, curso, idProfessor, idMantenedora;
    cpa = req.query.cpa;
    ano = req.query.ano;
    semestre = req.query.semestre;
    agente = req.query.agente;
    matricula = req.query.matricula;
    turma = req.query.turma;
    curso = req.query.curso;
    idProfessor = req.query.idProfessor;
    idMantenedora = req.query.idMantenedora;

    if (!cpa || !ano || !semestre) { erro = true; }

    if (!erro) {

        switch (agente) {

            case 'Corpo Docente':

                if (!curso) { erro = true; }
                if (!idProfessor) { erro = true; }

            case 'Corpo Discente':

                if (!matricula) { erro = true; }
                if (!turma) { erro = true; }
                if (!curso) { erro = true; }

        }

    }

    if (erro) {

        return res.status(500).send({ erro: 'Parâmetros obrigatórios foram omitidos.' });

    } else {

        return Pool(banco, read(cpa, ano, semestre, agente, matricula, turma, curso, idProfessor), res);

    }

}

module.exports = controller;