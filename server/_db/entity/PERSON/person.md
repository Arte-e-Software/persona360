# Entidade PERSON

Pessoa é o indivíduo com cadastro no sistema. Se relaciona com todo o sistema.
Todo USER é uma PERSON.

# Modelo de Dados
personId INT PK
personName VARCHAR(500)
personEmail VARCHAR(500) PK
personMobile VARCHAR(13) PK
cadDate DATETIME
isActive BIT

## Relacionamentos ##

# PERSON_DETAIL
