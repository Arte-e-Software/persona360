# Entidade PRODUCT

Produto é tudo que pode ser consumido por PERSON

# Modelo de Dados
productId INT PK
productName VARCHAR(300)
typeId INT FK
cadDate DATETIME
cadUserId INT FK
isActive BIT

## Relacionamentos ##

# USER
userID on cadUserId

# PERSON
cadUserId on userId on userId

# TYPE
typeId on typeId

# PRODUCT_GROUP
productId on productId