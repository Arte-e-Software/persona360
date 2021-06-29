function getResultadoPesquisaCupom() {

    let CONTROLLER = "/adm/pesquisa/cupom";

    $.ajax({
        url: CONTROLLER,
        type: 'get'
    })
        .done(function (msg) {
            dealJson(msg);
        })
        .fail(function (jqXHR, textStatus, msg) {
            alert(msg);
        });
}

var dealJson = function (jsonObj) {

    let nome, email, newRow, index, cupom, data, id, qtd;

    for (i = 0; i < jsonObj.length; i++) {
        index = i + 1;
        id = jsonObj[i].ID;
        nome = jsonObj[i].NOME_ALUNO;
        email = jsonObj[i].EMAIL_ALUNO;
        cupom = jsonObj[i].CUPOM;
        data = jsonObj[i].DATA_SOLICITACAO;
        qtd = jsonObj[i].NUM_CUPONS;
        newRow = '<tr>';
        newRow = + '<td>' + index + '</td>';
        newRow = + '<td>' + nome + '</td>';
        newRow = + '<td>' + cupom + '</td>';
        newRow = + '<td>' + qtd + '</td>';
        newRow = + '<td>' + data + '</td>';
        newRow = + '<td>' + email + '</td>';
        newRow = + '<td>';
        newRow = + '<button class="btn btn-outline-success my-2 my-sm-0" onclik=" javascript: confirmaAtivacao(' + jsonObj[i] + ');"> Ativar </button>';
        newRow = + '</td>';
        newRow = + '</tr>';
        $('#resultPesq').append(newRow);
    }

    if (!newRow) {
        $('#resultPesq').append('<tr><td colspan="3">Nenhuma solicitação.</td></tr>');
    }
}

var confirmaAtivacao = function (obj) {
    console.log('console');
    var id = obj.ID;
    var email = obj.EMAIL_ALUNO;
    var cupom = obj.CUPOM;
    var ok = confirm('Confirma ativação do cupom: ' + cupom + ' ?');
    if (ok) {
        document.location.assign('/adm/ativaCupom/:' + email + '/:' + cupom + '/:' + id);
    } else {
        return;
    }
}


/*
var dealJson = function(jsonObj) {

    let nome, email, newRow, index, cupom, data, id;

    for(i=0;i<jsonObj.length;i++){
        index = i+1;
        id = jsonObj[i].ID;
        nome = jsonObj[i].NOME_ALUNO;
        email = jsonObj[i].EMAIL_ALUNO;
        cupom = jsonObj[i].CUPOM;
        data = jsonObj[i].DATA_SOLICITACAO;
        newRow = "<tr><td>"+index+"</td><td>"+ nome +"</td><td>"+ cupom +"</td><td>"+ data +"</td><td>"+ email +"</td><td><a href='/adm/enviaEmail/:"+ email +"/:"+ cupom +"/:"+ id +"'><button class='btn btn-outline-success my-2 my-sm-0' id='btn_email'>Ativar</button></a></td></tr>";
        $("#resultPesq").append(newRow);
    }

    if(!newRow){
        $("#resultPesq").append("<tr><td colspan='3'>Nenhuma solicitação.</td></tr>");
    }
}
*/
