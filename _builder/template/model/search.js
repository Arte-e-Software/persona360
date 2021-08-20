module.exports = data => {

    let model = data.comment + '\n//idPessoa chega em params.idPessoa, mas ainda não estou usando\m//** desconsidere esse comentário para Entity = Pessoa\n' + '\n'
        , fields =  data.entity.fields
        , where
        , searchable = fields.map((field)=>{

            if(field.searchable){
                return field.name;
            };
    
        }).filter((field)=>{ return field != undefined; })
        ;

    fields = fields.map((field)=>{ return field.name +'\n' })
    where = searchable.map((field)=>{return field +' like '+ "'%${params.pesq}%'" });
    where = '('+ where.join('\nOR ') + ')\n';

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