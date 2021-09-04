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

/**
Cinema Show - Genesis

"Listen to the old one speak of all he has lived through.
I have crossed between the poles, for me there's no mystery.
Once a man, like the sea I raged,
Once a woman, like the earth I gave.
But there is in fact more earth than sea."
 */