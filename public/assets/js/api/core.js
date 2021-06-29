function checkEmail(email) {

    let rota = '/api/curso/leilao/pre/email/'+ email;
    let retorno = ajaxNode(rota, null, '#check-email');
    if(retorno){
        let temEmail = retorno[0];
        alert(temEmail);
    }
    return;
    
}