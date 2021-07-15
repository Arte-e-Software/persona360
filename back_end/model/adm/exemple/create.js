function insert(remoteAddress, Cpa, Ano, Semestre, Agente, Matricula, Turma, Curso, idProfessor, idMantenedora) {

    let query = `
                    BEGIN TRAN
                    INSERT INTO NODE_cpaRespondente VALUES
                    (
                     '${ remoteAddress }'
                    ,'${ Cpa }'
                    , ${ Ano }
                    , ${ Semestre }
                    ,'${ Agente }'
                    , ${ Matricula }
                    , ${ Turma }
                    , ${ Curso }
                    , ${ idProfessor }
                    , ${ idMantenedora }
                    ,GETDATE()
                    )
                    IF @@ERROR = 0
                    BEGIN
                        SELECT @@IDENTITY AS idRespondente
                        COMMIT TRAN
                    END
                    ELSE
                    BEGIN
                        SELECT NULL AS idRespondente
                        ROLLBACK TRAN
                    END
                `
        console.log(query);

    return query;

};

module.exports = insert;

/*
[idRespondente] [int] IDENTITY(1,1) NOT NULL,
[remoteAddress] [char](15) NOT NULL,
[Cpa] [varchar](100) NOT NULL,
[Ano] [int] NOT NULL,
[Semestre] [int] NOT NULL,
[Agente] [varchar](50) NOT NULL,
[Matricula] [char](15) NULL,
[Turma] [char](10) NULL,
[Curso] [char](3) NULL,
[idProfessor] [int] NULL,
[idMantenedora] [int] NULL,
[Data] [datetime] NOT NULL,
*/