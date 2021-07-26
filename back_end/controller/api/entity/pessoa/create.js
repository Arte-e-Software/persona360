module.exports = (tenant, req, res) => {

    let db = require('../../../../db/mssql/conn').db // Pegar esse carinha a partir do tenant na versão final!
        , Pool = require('../../../../db/mssql/pool')
        , Model = require('../../../../model/entity/pessoa/create')
        , idTenant = tenant.idTenant
        , Nome = req.params.Nome
        , Email = req.params.Email
        , Senha = req.params.Senha
        , SHA256 = require('crypto-js/sha256')
        , erro = !idTenant || !Nome || !Email || !Senha
        ;

        Senha = SHA256(`${idTenant}${Senha}`);

    if (erro) {

        return res.status(500).send({ erro: 'Parâmetros obrigatórios omitidos.' });

    } else {

        return Pool(db, Model(idTenant, Nome, Email, Senha), res);

    }

};