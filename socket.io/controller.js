function controller(socket, incoming, callback) {
    return {
        "then": callback(socket, incoming),
        "catch": incoming => {
            alert('Erro', `
            ${incoming.payload}
            <hr>
            <small>${incoming.timestamp}</small>
            `, 'danger')
        }
    }
}
module.exports = controller