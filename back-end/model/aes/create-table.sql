-- Create a new table called 'aes' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('aes', 'U') IS NOT NULL
DROP TABLE aes
GO
-- Create the table in the specified schema
CREATE TABLE aes
(
    
    idAes INT NOT NULL IDENTITY(1,1) PRIMARY KEY, -- primary key column
    client [CHAR](20) not null,
    cadDate datetime NOT NULL,
    isActive bit not null
   
);
GO