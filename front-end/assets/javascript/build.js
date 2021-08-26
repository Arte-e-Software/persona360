function build() {

    // Aqui começa o bate-papo via socket.io
    // Emito uma mensagem dizendo que o botão foi clicado
    // O listner precisa controlar todo o fluxo de build
    // Dando feedback a cada evento relevante:
    /**
     * Nome da entity que está trabalhando
     * Em qual factory está e em qual etapa do processo
     * Feedback de tudo concluido com reltório de erros
     * Se tudo bem, altera botão Build para /adm
     * Em /adm renderiza a tela de login
     * O dasboard abre com alert( N novas tabelas foram criadas)
     * abrir a view Update de Pessoa para o administrador editar seus dados
     * Voltando ao dashboard, dica sobre inserir dados nas outras tabelas
     * deixar notificação na aba Entidades até que todas as tabelas sejam populadas
     */

    // Abro a conexão com o servidor
    const socket = io()
    let date = new Date()
        ,agora = ''
         agora  = date.getFullYear + '-'
         agora += date.getMonth + '-'
         agora += date.getDay + ':'
         agora += date.getHours + ':'
         agora += date.getMinutes + ':'
         agora += date.getSeconds + '.'
         agora += date.getMilliseconds

    socket.emit('star build',);

    // when the client emits 'add user', this listens and executes
    socket.on('add user', (username) => {
        if (addedUser) return;

        // we store the username in the socket session for this client
        socket.username = username;
        ++numUsers;
        addedUser = true;
        socket.emit('login', {
            numUsers: numUsers
        });
        // echo globally (all clients) that a person has connected
        socket.broadcast.emit('user joined', {
            username: socket.username,
            numUsers: numUsers
        });
    });

}

function resolve(response) {

    alert('Sucesso', response, 'success')

}

function reject(err) {

    alert('Erro', err, 'danger')

}