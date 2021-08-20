let btn = id => { return document.getElementById(id) }

btn('btnBuild').addEventListener('click', build, false);

let entity = entity => {

    return entity.map((entity) => { return `${entity.name}` }).join(' | ')

};

function build() {

    let callback = response => { 

         if(response.data.finish){

            document.getElementById('version-config').remove();
            feedBack(entity(response.data.entity), 'Build Concluido', 'success');
            btn('div-btns').innerHTML = '';
            btn('div-btns').innerHTML = `

                <div class="container d-grid gap-2" id="div-btnCreate">
                    <button class="btn btn-lg btn-primary" id="btnCreate">Rodar build das tabelas: <small>${ entity(response.data.entity) }</small></button>
                </div>
            
            `;
            btn('btnCreate').addEventListener('click', create, false);

         } else {

            feedBack('Erro no Build', false, 'danger');

         };

    };

    httpRequest('GET', '/build/run', false, callback, false);

};

function create(){

    let callback = response => { 

        if(response.data.finish){

           feedBack(entity(response.data.entity), 'Tabelas Criadas com Sucesso', 'success');
           btn('div-btns').innerHTML = '';
           btn('div-btns').innerHTML = `

               <div class="container d-grid gap-2" id="div-btnInsert">
                   <button class="btn btn-lg btn-primary" id="btnInsert">Inserir dados de teste nas tabelas: <small>${ entity(response.data.entity) }</small></button>
               </div>
           
           `;
           btn('btnInsert').addEventListener('click', insert, false);

        } else {

           feedBack('Erro no Create Tables', false, 'danger');

        };

   };

   httpRequest('GET', '/build/run/create', false, callback, false);

};

function insert(){

    let callback = response => { 

        if(response.data.finish){

           feedBack(entity(response.data.entity), 'Insert Inicial feito com Sucesso', 'success');
           btn('div-btns').innerHTML = '';
           btn('div-btns').innerHTML = `

               <div class="container d-grid gap-2" id="div-btnAdm">
                   <button class="btn btn-lg btn-primary" id="btnAdm">Seu /adm está pronto <small>Usuário: adm@persona360.com.br | senha: adm@Persona360 </small></button>
               </div>
           
           `;
           btn('btnAdm').addEventListener('click', document.location.assign('/adm'), false);

        } else {

           feedBack('Erro no Insert into Tables', false, 'danger');

        };

   };

   httpRequest('GET', '/build/run/insert', false, callback, false);

};