function read(cpa, ano, semestre, agente, matricula, turma, curso, idProfessor) {

    let queryAgente;

    if (agente == 'Corpo Docente') {

        queryAgente = `AND idProfessor = ${ idProfessor } AND Curso = '${ curso }'`;

    }

    if (agente == 'Corpo Discente') {

        queryAgente = `AND Matricula = '${ matricula }' AND Turma = '${ turma }' AND Curso = '${ curso }'`;

    }

    let query = `

        DECLARE @idRetorno int;
        SET  @idRetorno = (
        SELECT TOP 1
            idRespondente
        FROM
            NODE_cpaRespondente
        WHERE
                Cpa = '${ cpa }'
            AND Ano = ${ ano }
            AND Semestre = ${ semestre }
            AND Agente = '${ agente }'
            ${ queryAgente }
        );
        IF  @idRetorno = 0
        BEGIN
            SELECT NULL AS idRespondente
        END
        ELSE
        BEGIN 
            SELECT @idRetorno AS idRespondente
        END
            `
        //console.log(query);

    return query;

};

module.exports = read;

/*
[idRespondente] [int] IDENTITY(1,1) NOT NULL,
[remoteAddress] [varchar](300) NOT NULL,
[Cpa] [varchar](100) NOT NULL,
[Ano] [int] NOT NULL,
[Semestre] [int] NOT NULL,
[Agente] [varchar](30) NOT NULL,
[Matricula] [char](15) NULL,
[Turma] [char](10) NULL,
[Curso] [char](3) NULL,
[idProfessor] [int] NULL,
[idMantenedora] [int] NULL,
[Data] [datetime] NOT NULL,
*/