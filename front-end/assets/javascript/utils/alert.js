function alert(atencion, msg, type) {
   
        if(atencion === 'dev'){ type = 'secondary' }
        let alert = document.getElementById('alert')
        msg = JSON.stringify(msg)
        alert.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <h4><strong>${atencion}</strong></h4>
            <hr>
            <p>${msg}</p>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`

}