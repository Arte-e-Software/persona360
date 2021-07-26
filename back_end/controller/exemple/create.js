const Pool = require('../../../db/sql/pool');
const config = require('../../../db/sql/config');
const create = require('../../../model/cpa/respondente/create');
const banco = config.locaweb;

var remoteAddress = require('../remoteAddress');

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

            case 'Corpo Técnico Administrativo':

                if (!idMantenedora) { erro = true; }

            case 'Egresso':

                if (!curso) { erro = true; }

        }

    }

    if (erro) {

        return res.status(500).send({ erro: 'Parâmetros obrigatórios foram omitidos.' });

    } else {

        if (matricula != 'null') { matricula = `'${ matricula }'`; } else { matricula = 'NULL'; }
        if (turma != 'null') { turma = `'${ turma }'`; } else { turma = 'NULL'; }
        if (curso != 'null') { curso = `'${ curso }'`; } else { curso = 'NULL'; }
        if (idProfessor != 'null') { idProfessor = `${ idProfessor }`; } else { idProfessor = 'NULL'; }
        if (idMantenedora != 'null') { idMantenedora = `${ idMantenedora }`; } else { idMantenedora = 'NULL'; }

        //console.log(agente);
        console.log('matricula ' + matricula);
        console.log('turma ' + turma);
        console.log('curso ' + curso);
        console.log('idPro ' + idProfessor);
        console.log('idMant ' + idMantenedora);

        return Pool(banco, create(remoteAddress, cpa, ano, semestre, agente, matricula, turma, curso, idProfessor, idMantenedora), res);

    }

}

module.exports = controller;