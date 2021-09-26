function package(resource, payload, error) {

    return {
        "timestamp": new Date(),
        "handshake": true,
        "resource": resource,
        "payload": payload,
        "error": error
    }
    
}