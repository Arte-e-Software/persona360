function avaliacao(rota, aspecto, obj, avaliacaoIndividual, idRespondente) {

    let objTarget = document.getElementById(obj);

        if (!objTarget.innerHTML) {
            
            render(rota, aspecto, objTarget, avaliacaoIndividual, idRespondente);
        
        } 
    
};

function render(rota, aspecto, objTarget, avaliacaoIndividual, idRespondente){

    var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {

                let avaliacao = JSON.parse(this.responseText);
                montaAvaliacao(avaliacao, objTarget, aspecto, avaliacaoIndividual, idRespondente);

            }
        };

        xhttp.open("GET", rota, true);
        xhttp.send();

}

var montaAvaliacao = function(avaliacao, objTarget, aspecto, avaliacaoIndividual, idRespondente) {

    /**
     * Gambiarra para levar o idProfessor até a função de gravar
     * Sei que é feio, mas não temos mais tempo
     * Vou colocar no ar assim e depois encontrar uma outra solução
     */

     let idProfessor = objTarget.id.split("docente")[1];

    let perguntas = avaliacao.pergunta;
    let index = 0;
    for (let pergunta in perguntas) {

        objTarget.innerHTML += helperAvaliacao(aspecto, index, perguntas[pergunta], avaliacaoIndividual, idProfessor, idRespondente);
        index++
    }
};

var helperAvaliacao = function(aspecto, index, pergunta, avaliacaoIndividual, idProfessor, idRespondente) {

    var cod, tipo, escala, enunciado, ariaExpand, collapseShow;
    cod = pergunta.cod;

    //console.log('pergunta.cod ' + pergunta.cod);

    tipo = pergunta.tipo;
    escala = pergunta.escala;
    enunciado = pergunta.enunciado;

    if (index == 0) {

        ariaExpand = "true";
        collapseShow = "show";

    } else {

        ariaExpand = "false";
        collapseShow = "";
    }

    let indexElemento = new String(cod).replace(/\D/g, ''); 
    indexElemento += new String(index);

    if(idProfessor){

        indexElemento += idProfessor;

    }

    let template = '';

    switch (tipo) {

        case "conceito":

            template += '<div class="card row mb-3 p-4">';
            template += '<div class="col rounded-lg shadow" style="background-color: #33cccc;" id="heading_' + indexElemento + '">';
            template += '<button class="btn btn-lg btn-block pt-3" data-toggle="collapse" data-target="#collapse_' + indexElemento + '" aria-expanded="' + ariaExpand + '" aria-controls="collapse_' + indexElemento + '">';
            template += '<h4 id="h4_' + indexElemento + '" class="text-white text-left"><i id="i_' + indexElemento + '" class=""></i>&nbsp;&nbsp;';
            template += enunciado;
            template += '</h4>';
            template += '</button>';
            template += '</div>';
            template += '<div id="collapse_' + indexElemento + '" class="row justify-content-md-center collapse ' + collapseShow + '" aria-labelledby="heading_' + indexElemento + '" data-parent="">';
            template += '<div class="col text-center mt-3">';
            template += '<div class="btn-group btn-group-toggle btn-block flex-wrap" data-toggle="buttons">';
            template += '<label class="btn m-2 pt-2 rounded-lg btn-sm btn-outline-success">';
            template += '<p><i class="far fa-laugh fa-5x"></i></p>';
            template += '<input type="radio" name="' + cod + '" id="' + cod + '_5" value="5" autocomplete="off" onchange=" responder(this, ' + idRespondente + ',' + avaliacaoIndividual + ',' + idProfessor + ',' + indexElemento + ', ' + aspecto + ');"></label>';
            template += '<label class="btn m-2 pt-2 rounded-lg btn-sm btn-outline-primary">';
            template += '<p><i class="far fa-smile fa-5x"></i></p>';
            template += '<input type="radio" name="' + cod + '" id="' + cod + '_4" value="4" autocomplete="off" onchange=" responder(this, ' + idRespondente + ',' + avaliacaoIndividual + ',' + idProfessor + ',' + indexElemento + ', ' + aspecto + ');"></label>';
            template += '<label class="btn m-2 pt-2 rounded-lg btn-sm btn-outline-secondary">';
            template += '<p><i class="far fa-meh fa-5x"></i></p>';
            template += '<input type="radio" name="' + cod + '" id="' + cod + '_3" value="3" autocomplete="off" onchange=" responder(this, ' + idRespondente + ',' + avaliacaoIndividual + ',' + idProfessor + ',' + indexElemento + ', ' + aspecto + ');"></label>';
            template += '<label class="btn m-2 pt-2 rounded-lg btn-sm btn-outline-warning">';
            template += '<p><i class="far fa-frown fa-5x"></i></p>';
            template += '<input type="radio" name="' + cod + '" id="' + cod + '_2" value="2" autocomplete="off" onchange=" responder(this, ' + idRespondente + ',' + avaliacaoIndividual + ',' + idProfessor + ',' + indexElemento + ', ' + aspecto + ');"></label>';
            template += '<label class="btn m-2 pt-2 rounded-lg btn-sm btn-outline-danger">';
            template += '<p><i class="far fa-tired fa-5x"></i></p>';
            template += '<input type="radio" name="' + cod + '" id="' + cod + '_1" value="1" autocomplete="off" onchange=" responder(this, ' + idRespondente + ',' + avaliacaoIndividual + ',' + idProfessor + ',' + indexElemento + ', ' + aspecto + ');"></label>';
            template += '<label class="btn m-2 pt-2 rounded-lg btn-sm btn-outline-info">';
            template += '<p><i class="far fa-meh-blank fa-5x"></i></p>';
            template += '<input type="radio" name="' + cod + '" id="' + cod + '_0" value="0" autocomplete="off" onchange=" responder(this, ' + idRespondente + ',' + avaliacaoIndividual + ',' + idProfessor + ',' + indexElemento + ', ' + aspecto + ');"></label>';
            template += '</div>';
            template += '</div>';
            template += '</div>';
            template += '</div>';


            break;

        case "alternativas":

            template += '<div class="row my-3 bg-light p-2">';
            template += '<div class="col">';
            template += '<h4 class=" bg-info text-light px-3 pt-3 pb-1 rounded-lg"><p>' + enunciado + '</p></h4>';

            for (let i in escala) {

                template += '<p class="ml-4"><input type="checkbox" name="' + cod + '::' + i + '" id="' + cod + '_' + i + '" value="' + escala[i] + '" class="form-check-input"  onclick=" responder(this, ' + idRespondente + ',' + avaliacaoIndividual + ',' + idProfessor + ',' + indexElemento + ', ' + aspecto + ');"> ' + escala[i] + '</p>';

            }

            template += '</div>';
            template += '</div>';

            break;

        case "texto":

            var len, id;
            len = pergunta.len;
            id = pergunta.id;

            template += '<div class="row my-3 bg-light p-2">';
            template += '<div class="col">';
            template += '<input type="text" class="form-control" maxlength="' + len + '" name="' + id + '" id="' + id + '" placeholder="' + enunciado + '"  onblur=" responder(this, ' + idRespondente + ',' + avaliacaoIndividual + ',' + idProfessor + ',' + indexElemento + ', ' + aspecto + ');">';
            template += '</div>';
            template += '</div>';

            break;

        case "comentei":

            var len, id;
            len = pergunta.len;
            id = pergunta.id;

            template += '<div class="row my-3 bg-light p-2">';
            template += '<div class="col">';
            template += '<h4 class=" bg-info text-light px-3 pt-3 pb-1 rounded-lg"><p>Deixe um comentário(Opcional)</p></h4>';
            template += '<input type="text" class="form-control" maxlength="' + len + '" name="' + id + '" id="' + id + '" placeholder="Comentário de até 500 caracteres."  onblur=" responder(this, ' + idRespondente + ',' + avaliacaoIndividual + ',' + idProfessor + ',' + indexElemento + ', ' + aspecto + ');">';
            template += '</div>';
            template += '</div>';

            break;

        default:
            template += '<div class="row my-3 bg-light p-2">';
            template += '<div class="col">';
            template += '<p>Tipo de pergunta não identificado</p>';
            template += '</div>';
            template += '</div>';

    }

    return template;

};