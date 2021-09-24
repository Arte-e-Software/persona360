const create = (entity) => {

  let columns = require('./columns')(entity)

  return `
    
    IF OBJECT_ID('${entity.name}', 'U') IS NOT NULL;
    DROP TABLE ${entity.name};
    CREATE TABLE ${entity.name}
    (
    id_${entity.name} INT IDENTITY(1,1) NOT NULL PRIMARY KEY
    ,${columns});
    `

}

module.exports = create