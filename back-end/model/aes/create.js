module.exports = params => {

    return `

        BEGIN TRAN
        INSERT INTO aes VALUES
        (
            '${params.client}',
            GETDATE(),
            1
        );
        IF @@ERROR = 0
        BEGIN
            COMMIT TRAN
            SELECT
                idAes,
                client,
                cadDate,
                isActive
            FROM
                aes
            WHERE
                idAes = @@IDENTITY;
        END
        ELSE
        BEGIN
            ROLLBACK TRAN
            SELECT
                NULL AS idAes,
                '${params.client}' AS client,
                NULL AS cadDate,
                NULL AS isActive
        END

        `

}