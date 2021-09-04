function outgoing(method, payload, error) {
    return {
        "timestamp": new Date(),
        "handshake": true,
        "method": method,
        "payload": payload,
        "error": error
    }
}