function alert(attention, msg, type) {

    attention === 'dev' || type === 'danger' ? console.log(msg) : false

    let alert = document.getElementsByClassName('container container-alert')

    for (let i in alert) {
        alert[i].innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <h4><strong>${attention}</strong></h4>
            <hr>
            <p>${msg}</p>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`
    }

    let dissmiss = document.getElementsByClassName('btn-close')
        , btn
    
    for (i = 0; i < dissmiss.length; i++) {

        btn = dissmiss[i]
        btn.addEventListener('click', () => {

            for (let i in alert) { alert[i].innerHTML = '' }

        })
    }
}