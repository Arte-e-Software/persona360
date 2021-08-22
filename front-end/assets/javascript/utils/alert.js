function alert(msg, text, type) {

    document.getElementById('alert').innerHTML = `

    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <p><strong>${msg}: </strong></p>
        <hr>
        <p>${text}</p>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

` };