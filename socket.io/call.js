const package = require('./package')

function call(io) {
    
    io.on('connection', socket => {

        socket.on('call', received => {

            console.log('Call at ' + new Date() )
            
            if (received) {

                
                // #issue: desenvolver tratamentos de segurança
                // #issue: autenticação
                if (received.resource && received.payload) {

                    
                    let resource = received.resource // requisição: api, sql, file, serverfunction
                        , payload = received.payload // pacote com os dados em trânsito

                        // payload transporta:

                        // para o servidor sql
                        , query = payload.query

                        // formato de arquivo, entrada ou saída
                        , format = payload.format

                        // objeto que recebe o pacote de retorno no cliente
                        , target = payload.target

                        // botão que disparou a chamada no cliente
                        , btn = payload.btn

                        // para o servidor de arquivos recebe nome, retorna arquivo
                        , file = payload.file

                        // para rodar funções do servidor no lado do cliente
                        , serverfunction = payload.serverfunction

                        // parâmetros das funções do servidor
                        , serverfunctionparams = payload.serverfunctionparams

                        // resultado das chamadas, exceto no caso de file
                        , status = payload.status
                    
                    try {

                        require(`./${resource}`)(socket, payload)

                    } catch (err) {
                        
                        payload.status = `erro: ${resource} ${err}`

                        socket.emit('call', package(resource, payload, true))
                        
                    }

                } else {

                    let err = `pacote corrompido ${received}`
                        , payload = { "status": err }
                    
                    socket.emit('call', package(undefined, payload, true))

                }

            } else {

                let err = `package(${received}) vazio`
                    , payload = { "status": err }
                
                socket.emit('call', package(undefined, payload, true))

            }

        })

    })
}
module.exports = call