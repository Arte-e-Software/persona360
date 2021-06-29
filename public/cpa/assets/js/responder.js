function responder(inputObj, idRespondente, avaliacaoIndividual, idProfessor, indexElemento, aspecto) {

    var tipo = inputObj.type;
    codPergunta = inputObj.id;
    resposta = inputObj.value;

    var insert = true, feedback = true, useResposta = false;

    switch (tipo) {

        case "radio":
            break;

        case "checkbox":
            feedback = false;
            useResposta = true;
            if (!inputObj.checked) insert = false;
            break;

        case "text":
            feedback = false;
            if (resposta.length == 0) insert = false;
            break;

    };

    if (!avaliacaoIndividual) idProfessor = null;

    var xhttp = new XMLHttpRequest();
    var url = "/cpa/api/resposta/create/?idRespondente=" + idRespondente + "&codPergunta=" + codPergunta + "&idProfessor=" + idProfessor + "&aspecto=" + aspecto + "&resposta=" + resposta + '&indexElemento=' + indexElemento + '&insert='+ insert + '&useResposta='+ useResposta;

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            let retorno = JSON.parse(this.responseText);
            let erro = retorno.erro;
            let corStatusPergunta = ["info", "danger", "warning", "secondary", "primary", "success"];
            let iconStatusPergunta = ["far fa-meh-blank fa-w-16 fa-1x", "far fa-tired fa-w-16 fa-1x", "far fa-frown fa-w-16 fa-1x", "far fa-meh fa-w-16 fa-1x", "far fa-smile fa-w-16 fa-1x", "far fa-laugh fa-w-16 fa-1x"]

            if (feedback) {

                if (!erro) {

                    var targetPergunta = document.getElementById("heading_" + indexElemento);
                    var targetDivEscala = document.getElementById("collapse_" + indexElemento);
                    var h4Enunciado = document.getElementById("h4_" + indexElemento);
                    var iconResposta = document.getElementById("i_" + indexElemento);

                    targetPergunta.className = "col bg-" + corStatusPergunta[resposta] + " rounded-lg";
                    targetDivEscala.className = "row justify-content-md-center collapse";


                    if (!iconResposta.className) {

                        iconVazio = iconResposta;
                        iconResposta.className = iconStatusPergunta[resposta];
                        h4Enunciado.innerHTML += "&nbsp;";

                    } else {

                        iconVazio.className = iconStatusPergunta[resposta];
                        h4Enunciado.replaceChild(iconVazio, iconResposta);

                    }
                }
            }

            console.log(retorno);
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send();

};
