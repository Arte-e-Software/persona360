const create = (name, columns) => {

  return `
        
    -- Cria uma tabela chamada '${name}'

    IF OBJECT_ID('${name}', 'U') IS NOT NULL
    DROP TABLE ${name};

    CREATE TABLE ${name}
    (
    id_${name} INT IDENTITY(1,1) NOT NULL PRIMARY KEY
    ,${columns});
    `+ '`\n'

}

module.exports = create