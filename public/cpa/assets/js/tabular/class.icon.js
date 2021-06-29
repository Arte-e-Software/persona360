function classIcon(resposta) {

    let corStatusPergunta = ["info", "danger", "warning", "secondary", "primary", "success"];
    let iconStatusPergunta = ["far fa-meh-blank fa-w-16 fa-1x", "far fa-tired fa-w-16 fa-1x", "far fa-frown fa-w-16 fa-1x", "far fa-meh fa-w-16 fa-1x", "far fa-smile fa-w-16 fa-1x", "far fa-laugh fa-w-16 fa-1x"];
    return iconStatusPergunta[resposta] + " text-" + corStatusPergunta[resposta];

}
