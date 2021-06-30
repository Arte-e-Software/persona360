# Entidade USER

Usuário é uma pessoa (PERSON) com privilégio de acesso ao sistema administrativo
Todo USER é um PERSON mas nem todo PERSON é USER

# Modelo de dados
userId INT PK
personId INT FK
cadDate DATETIME
cadUserId INT FK
isActive BIT

## Relacionamentos ##

# USER
UserId on cadUserId

# PERSON
personId on personId

# USER_GROUP
UserId on UserId
