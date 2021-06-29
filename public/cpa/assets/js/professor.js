        function alternarProfessor(idRespondente, idProfessor) {

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    if (!this.responseText) {

                        return;

                    } else {

                        deal(JSON.parse(this.responseText), idRespondente, idProfessor);

                    }
                }
            };

            xhttp.open("GET", "/cpa/api/resposta/read/" + idRespondente, true);
            xhttp.send();
        }

        function deal(respostas, idRespondente, idProfessor) {

            //console.log(respostas);

            let resposta;

            for (let i in respostas) {

                resposta = respostas[i]

                if (parseInt(idProfessor) == parseInt(resposta.idProfessor)) {

                    let indexElemento = resposta.indexElemento;
                    let Resposta = resposta.Resposta;

                    setResposta(indexElemento, Resposta, true);

                } 

            }

        };

        function setResposta(indexElemento, resposta, set) {

            let corStatusPergunta = ["info", "danger", "warning", "secondary", "primary", "success"];
            let iconStatusPergunta = ["far fa-meh-blank fa-w-16 fa-1x", "far fa-tired fa-w-16 fa-1x", "far fa-frown fa-w-16 fa-1x", "far fa-meh fa-w-16 fa-1x", "far fa-smile fa-w-16 fa-1x", "far fa-laugh fa-w-16 fa-1x"]

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
    