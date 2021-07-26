module.exports = (idTenant, Nome, Email, Senha) => {

    /**
     * CREATE TABLE [Pessoa](
        [idPessoa] [int] IDENTITY(1,1) NOT NULL,
        [idTenant] [int] NULL,
        [Nome] [varchar](140) NOT NULL,
        [Email] [varchar](140) NULL,
        [Senha] [char](64) NULL,
        [DataCad] [datetime] NOT NULL,
        [Ativo] [bit] NOT NULL,
     */

    `
    BEGIN TRAN
    INSERT INTO Pessoa VALUES
    (
         ${idTenant}
        ,'${Nome}'
        ,'${Email}'
        ,'${Senha}'
        ,GETDATE()
        ,1
    )
    IF @@ERROR = 0
    BEGIN
        SELECT @@IDENTITY AS idPessoa, GETDATE() as DataTransacao
        COMMIT TRAN
    END
    ELSE
    BEGIN
        SELECT 0 AS idPessoa, GETDATE() as DataTransacao 
        ROLLBACK TRAN
    END
    `;

};