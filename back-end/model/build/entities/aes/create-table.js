module.exports = () => {

    let name = 'aes'
        , columns = `
    
        client [CHAR](20) not null,
        cadDate datetime NOT NULL,
        isActive bit not null

    `

    return `
    
    -- Create a new table called '${name}' in schema 'SchemaName'
    -- Drop the table if it already exists
    IF OBJECT_ID('${name}', 'U') IS NOT NULL
    DROP TABLE ${name}
    GO
    -- Create the table in the specified schema
    CREATE TABLE ${name}
    (

        id${name} INT NOT NULL IDENTITY(1,1) PRIMARY KEY, -- primary key column
        ${columns}

    );
    GO

    SELECT * FROM SYSOBJECTS WHERE NAME = ${name} AND XTYPE = 'U';

    `

}