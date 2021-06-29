function pullTotais(cpa, ano, semestre) {

    let api = "/cpa/api/tabular/totais/?cpa=" + cpa + "&ano=" + ano + "&semestre=" + semestre;
    httpRequest(api, helperTotais);

}

function pullMediaGeral(cpa, ano, semestre) {

    let api = "/cpa/api/tabular/media/geral/?cpa=" + cpa + "&ano=" + ano + "&semestre=" + semestre;
    httpRequest(api, helperMediaGeral);

}

function pullMediaAgente(cpa, ano, semestre, agente) {

    let api = "/cpa/api/tabular/media/agente/?cpa=" + cpa + "&ano=" + ano + "&semestre=" + semestre + "&agente=" + agente;
    httpRequest(api, helperMediaAgente);

}

function pullTabulaAspecto(cpa, ano, semestre, agente, aspecto) {

    let api = "/cpa/api/tabular/aspecto/?cpa=" + cpa + "&ano=" + ano + "&semestre=" + semestre + "&agente=" + agente + "&aspecto=" + aspecto;
    httpRequest(api, helperTabulaAspecto);

}

function pullTabulaAspectoUnidade(cpa, ano, semestre, agente, aspecto, unidade) {

    let api = "/cpa/api/tabular/aspecto/unidade/?cpa=" + cpa + "&ano=" + ano + "&semestre=" + semestre + "&agente=" + agente + "&aspecto=" + aspecto + "&unidade=" + unidade;
    httpRequest(api, helperTabulaAspecto);

}

function pullComentarios(cpa, ano, semestre, agente, aspecto) {

    let api = "/cpa/api/tabular/comentarios/?cpa=" + cpa + "&ano=" + ano + "&semestre=" + semestre + "&agente=" + agente + "&aspecto=" + aspecto;
    console.log(api);
    httpRequest(api, helperComentarios);

}

function helperComentarios(objJson) {

    let comentario = objJson;
    let Agente = comentario[0].Agente,
        Aspecto = comentario[0].Aspecto,
        comentarios = "",
        numComentarios = comentario.length;
    for (let i in comentario) {

        if (comentario[i].Resposta.length > 3) {
            comentarios += "<hr><blockquote class='blockquote'><p class='mb-0'>" + comentario[i].Resposta + "</p></blockquote>";
        }

    }

    document.getElementById("tituloComentariosModal").innerHTML = Agente.toUpperCase() + " comenta sobre " + Aspecto.toUpperCase() + "<br><span class='label'>" + numComentarios + " comentários</span>";
    document.getElementById("comentarios").innerHTML = comentarios;

}

function helperTotais(totais) {

    console.log(totais);

    let divTotais = document.getElementById("tabulacao-totais");
    let htmlHelper = "";
    let totalRespondentes = 0, totalRespostas = 0;
    let agente = '';
    htmlHelper += "<table class='table border-light'>";
    htmlHelper += "<tr class='th font-weight-bold bg-light'>";
    htmlHelper += "<td class='text-left'>Agente</td><td>Acessos*</td><td>Respostas</td><td>Período</td><td>Num. Dias</td><td>Média dia</td>";
    htmlHelper += "</tr>";

    for (let i in totais) {

        totalRespondentes += totais[i].numRespondentes;
        totalRespostas += totais[i].numRespostas;

        agente = totais[i].agente.split(' ');
        agente = agente[agente.length - 1].toLowerCase();

        htmlHelper += "<tr>";
        htmlHelper += "<td class='text-left'><a href='/cpa/foc/2019/2/tabular/agente/?agente=" + totais[i].agente + "'>" + totais[i].agente + "</a></td>";
        htmlHelper += "<td>" + totais[i].numRespondentes + "</td>";
        htmlHelper += "<td>" + totais[i].numRespostas + "</td>";
        htmlHelper += "<td>de " + totais[i].primeiroDia + " a " + totais[i].ultimoDia + "</td>";
        htmlHelper += "<td>" + totais[i].numDias + "</td><td>" + totais[i].mediaDia + "</td>";
        htmlHelper += "</tr>";

    }

    htmlHelper += "<tr class='font-weight-bold'><td class='text-left'>Total</td><td>" + totalRespondentes + "</td><td>" + totalRespostas + "</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
    htmlHelper += "<tr><td class='text-left' colspan='6'>*Agentes podem ter acessado porém não necessariamente responderam </td></tr>";
    htmlHelper += "</table>";

    divTotais.innerHTML = htmlHelper;

}

function helperMediaGeral(mediaGeral) {

    console.log(mediaGeral);

    let mediaGeral_ = document.getElementById("mediaGeral_");
    mediaGeral_.innerHTML = mediaGeral[0].mediaGeral + " | Conceito: " + textConceito(mediaGeral[0].mediaGeral);

}

function helperMediaAgente(mediaAgente) {

    console.log(mediaAgente);

    let divMediaAgente = document.getElementById("media-agente");
    let htmlHelper = "";
    htmlHelper += "<table class='table border-light'>";
    htmlHelper += "<tr class='th font-weight-bold bg-light'>";
    htmlHelper += "<td class='text-left'>Aspecto</td><td>Média</td><td>Conceito</td>";
    htmlHelper += "</tr>";

    for (let i in mediaAgente) {

        agente = mediaAgente[i].Agente;
        aspecto = mediaAgente[i].Aspecto;
        media = mediaAgente[i].MediaAspecto;

        htmlHelper += "<tr>";
        htmlHelper += "<td class='text-left'><a href='/cpa/foc/2019/2/tabular/aspecto/?agente=" + agente + "&aspecto=" + aspecto + "'>" + aspecto + "</a></td>";
        htmlHelper += "<td>" + media + "</td>";
        htmlHelper += "<td class='font-weight-bold'>" + textConceito(media) + "</td>";
        htmlHelper += "</tr>";

    }

    htmlHelper += "</table>";

    divMediaAgente.innerHTML = htmlHelper;

}

function helperTabulaAspecto(tabulaAspecto) {

    console.log(tabulaAspecto);

    let divTabulaAspecto = document.getElementById("tabula-aspecto");
        divTabulaAspecto.innerHTML = "Aguarde...";

    let htmlHelper = '', codPergunta, nResp = [], total = 0, media = 0, conceito = "", jsShowPergunta = '';
    
    htmlHelper += "<table class='table border-light'>";
    htmlHelper += "<tr class='th font-weight-bold bg-light'>";
    htmlHelper += "<td class='text-left'>CodPerg</td>";
    htmlHelper += "<td class='text-left'>Pergunta</td>";
    htmlHelper += "<td>NSA</td>";
    htmlHelper += "<td>1</td>";
    htmlHelper += "<td>2</td>";
    htmlHelper += "<td>3</td>";
    htmlHelper += "<td>4</td>";
    htmlHelper += "<td>5</td>";
    //htmlHelper += "<td>Respostas</td>";
    htmlHelper += "<td>Média</td>";
    htmlHelper += "<td>Conceito</td>";
    htmlHelper += "</tr>";

    for (let i in tabulaAspecto) {

        Pergunta = tabulaAspecto[i].Pergunta;
        codPergunta = tabulaAspecto[i].CodPergunta;
        nResp[0] = tabulaAspecto[i].N0;
        nResp[1] = tabulaAspecto[i].N1;
        nResp[2] = tabulaAspecto[i].N2;
        nResp[3] = tabulaAspecto[i].N3;
        nResp[4] = tabulaAspecto[i].N4;
        nResp[5] = tabulaAspecto[i].N5;
        total = nResp[0] + nResp[1] + nResp[2] + nResp[3] + nResp[4] + nResp[5];
        media = (nResp[1] * 1 + nResp[2] * 2 + nResp[3] * 3 + nResp[4] * 4 + nResp[5] * 5) / total;

        nResp[0] = (nResp[0] / total) * 100
        nResp[1] = (nResp[1] / total) * 100
        nResp[2] = (nResp[2] / total) * 100
        nResp[3] = (nResp[3] / total) * 100
        nResp[4] = (nResp[4] / total) * 100
        nResp[5] = (nResp[5] / total) * 100

        media = media.toFixed(2);
        
        conceito = textConceito(media);

        htmlHelper += "<tr>";
        htmlHelper += "<td class='text-left'>" + codPergunta + "</td>";
        htmlHelper += "<td class='text-left'>" + Pergunta + "</td>";
        htmlHelper += "<td>" + nResp[0].toFixed(2) + "%</td>";
        htmlHelper += "<td>" + nResp[1].toFixed(2) + "%</td>";
        htmlHelper += "<td>" + nResp[2].toFixed(2) + "%</td>";
        htmlHelper += "<td>" + nResp[3].toFixed(2) + "%</td>";
        htmlHelper += "<td>" + nResp[4].toFixed(2) + "%</td>";
        htmlHelper += "<td>" + nResp[5].toFixed(2) + "%</td>";
        //htmlHelper += "<td>" + total + "</td>";
        htmlHelper += "<td>" + media + "</td>";
        htmlHelper += "<td class='font-weight-bold'>" + conceito + "</td>";
        htmlHelper += "</tr>";

        nResp[0] = 0;
        nResp[1] = 0;
        nResp[2] = 0;
        nResp[3] = 0;
        nResp[4] = 0;
        nResp[5] = 0;
        total = 0;
        media = 0;
        conceito = "";

    }

    htmlHelper += "</table>";
    divTabulaAspecto.innerHTML = htmlHelper;

}

function textConceito(media) {

    let conceito;

    /*
    4,2 – 5,0 – Muito Bom
    3,4 – 4,1 – Bom
    2,6 – 3,3 – Satisfatório
    1,8 – 2,5 – Parcialmente Satisfatório
    1,0 – 1,7 – Insatisfatório
     */

    if (media == 0) { conceito = "Não se aplica" }
    if (media > 1 && media <= 1.7) { conceito = "Insatisfatório" }
    if (media > 1.7 && media <= 2.5) { conceito = "Parcial. Satifatório" }
    if (media > 2.5 && media <= 3.3) { conceito = "Satisfatório" }
    if (media > 3.3 && media <= 4.1) { conceito = "Bom" }
    if (media > 4.1) { conceito = "Muito Bom" }

    return conceito;

}

function filtraUnidade(cpa, ano, semestre, agente, aspecto, selectUnidade) {

    let divTabulaAspecto = document.getElementById("tabula-aspecto"), htmlHelper = "";

        htmlHelper += "<table class='table border-light'>";
        htmlHelper += "<tr class='th font-weight-bold bg-light'>";
        htmlHelper += "<td class='text-left'>Carregando...</td>";
        htmlHelper += "</tr>";
        htmlHelper += "</table>";

        divTabulaAspecto.innerHTML = htmlHelper;

    let unidade = selectUnidade.options[selectUnidade.selectedIndex].value,
        nomeUnidade = selectUnidade.options[selectUnidade.selectedIndex].text;
        document.getElementById("nomeUnidade").innerHTML = "<b>"+ nomeUnidade +"</b>";
    if (unidade == 0) {

        pullTabulaAspecto(cpa, ano, semestre, agente, aspecto);

    } else {

        pullTabulaAspectoUnidade(cpa, ano, semestre, agente, aspecto, unidade);
        
    }

}