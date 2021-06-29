function ajaxNode(rota, dados, loading) {

    $.ajax({
            url: rota,
            type: 'get',
            data: dados,
            beforeSend: function() {
                $(loading).html("Carregando");
            }
        })

        .done(function(resNode) {
            $(loading).html("");
            return resNode;
        })
        
        .fail(function(jqXHR, textStatus, resNode) {
            $(loading).html("Erro: "+ textStatus);
            return false;
        });

}
