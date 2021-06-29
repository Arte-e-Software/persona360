function insert(nome, email, mensagem){
    
    let query = `

            INSERT INTO contato VALUES
            (
                '${ nome.trim() }',
                '${ email.trim() }',
                '${ mensagem.trim() }',
                GETDATE()
            )
            SELECT @@IDENTITY AS idContato
        
    `
    return query;

};

module.exports = insert;

            