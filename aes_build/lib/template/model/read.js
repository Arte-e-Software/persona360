module.exports = data => {

    let model = data.comment + '\n//idPessoa chega em params.idPessoa, mas ainda não estou usando\m//** desconsidere esse comentário para Entity = Pessoa\n' + '\n'
        , fields = data.entity.fields
        , where
        ;

    fields = fields.map((field)=>{ return field.name+'\n' });
    where = `    id${data.entity.name} = `+ '${params.id'+ data.entity.name +'}\n';

    model += 'module.exports = params => {\n\nreturn `';
    model += `

SELECT
 id${data.entity.name}
,${fields}FROM
${data.entity.name}
WHERE 
${where};
`;

    return model + '\n`};';

};