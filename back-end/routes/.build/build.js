const express = require('express')
    , router = express.Router()
    , fs = require('fs')
    , model = {
            readme: {
                version: "1.2",
                comments: [
                    "Para popular uma tabela criada durante o build, informe os valores iniciais na chave 'values'.",
                    "Cada posição no array principal é um registro e cada campo é uma posição nesse registro.",
                    "É possível informar valores padrões e valores iniciais, em ambos os casos, atribua um valor.",
                    "valore precisa ter tipo compatível com o type na chave, se não precisar, use false.",
                    "Valores 'default' devem estar na tipagem de Javascript; são aceitos: String, Number, Boolean e Date."
                ],
                entity: "{name: String, namespace: [String], values: [[Any]], fields: {name: String, type: String, length: Number, null: Boolean, default: Any, searchable: Boolean, form: {label: String, type: String, value: Any, required: Boolean, placeholder: String}}"
            },
            entity: false
        }
    ;

    module.exports = router.get('/build', (req, res) => {

    let error = false;

    fs.openSync('../../.build/model.json')

    .then(() => {

        return model = fetch('../../.build/model.json')
        
    })

    .catch((err) => {

        error = true
        return model = err

    })

    res.send({model, error})

})