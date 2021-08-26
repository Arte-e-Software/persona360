function alert(msg, text, type) {

    let alert = document.getElementById('alert');

    alert.innerHTML = `

        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <h4><strong>${msg}</strong></h4>
            <hr>
            <p>${text}</p>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>` 


};