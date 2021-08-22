let btn = id => { return document.getElementById(id) }

btn('btnBuild') ? btn('btnBuild').addEventListener('click', build, false) : () => { };

async function build() {

    btn('btnBuild').disabled = true;
    btn('btnBuild').innerHTML = 'Aguarde';

    let callback = response => {

        if (!response.data.error) {

            create();

        } else {

            handlerError(response.data.error, 'Erro no build');

        };

    };

   await httpRequest('GET', '/build/run', false, callback, false);

};

async function create() {

    let callback = response => {

        console.log(response);

        if (!response.data.error) {

            insert();

        } else {

            handlerError(response.data.error, 'Erro no Create Tables');

        };

    };

    await httpRequest('GET', '/build/run/table/create', false, callback, false);

};

async function insert() {

    let callback = response => {

        if (!response.data.error) {

           
                btn('div-btns').innerHTML = '';
                btn('div-btns').innerHTML = `

                    <div class="container d-grid gap-2" id="div-btnAdm">
                        <p>
                            <h4>Parabéns! Seu ADM está pronto.</h4>
                            <h5><strong>Usuário: adm@persona360.com.br | senha: adm@Persona360</strong></h5>
                        </p>
                        <a href="/adm"><button class="btn btn-lg btn-primary" id="btnAdm">Ir para o ADM</button></a>
                    </div>
           
           `;

        } else {

            handlerError(response.data.error, 'Erro no Insert Tables');
            
        };

    };

    await httpRequest('GET', '/build/run/table/insert', false, callback, false);

};

function handlerError(error, where){

    feedBack(error, where, 'danger');
    btn('btnBuild').disabled = false;
    btn('btnBuild').innerHTML = 'Reiniciar construção do MVC';

};