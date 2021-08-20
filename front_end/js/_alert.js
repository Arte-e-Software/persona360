function feedBack(msg, text, type) {

    document.getElementById('_alert').innerHTML = `

    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${text}: </strong>${msg}.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

` };