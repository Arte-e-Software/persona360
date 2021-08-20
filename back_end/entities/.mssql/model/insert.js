
exports.Tenant = ` 

-- Insere dados na tabela Tenant

BEGIN TRAN

INSERT INTO Tenant VALUES
(
'Persona360'
,'adm.build@persona360.com.br'
,'28d268b387886c7831c3090db44e01c76e211b477fec942e75ff8cdcf2a7308b'
,'GETDATE()'
,1
);;

IF @@ERROR = 0 
BEGIN
SELECT 0 AS err
COMMI TRAN
END
ELSE
BEGIN
SELECT @@ERROR as err
ROLLBACK TRAN
END
`
exports.Pessoa = ` 

-- Insere dados na tabela Pessoa

BEGIN TRAN

INSERT INTO Pessoa VALUES
(
'Administrador do Persona360'
,1
,'adm@persona360.com.br'
,'28d268b387886c7831c3090db44e01c76e211b477fec942e75ff8cdcf2a7308b'
,'GETDATE()'
,1
);

INSERT INTO Pessoa VALUES
(
'Usuário do Persona360'
,1
,'user@persona360.com.br'
,'62e6fac579e25e48db0a8a8cf2f2e4050f79ee811a62b8b7a5fab007c8b0ee02'
,'GETDATE()'
,1
);;

IF @@ERROR = 0 
BEGIN
SELECT 0 AS err
COMMI TRAN
END
ELSE
BEGIN
SELECT @@ERROR as err
ROLLBACK TRAN
END
`
exports.Conteudo = ` 

-- Insere dados na tabela Conteudo

BEGIN TRAN

INSERT INTO Conteudo VALUES
(
'Curso Persona360. Escola Persona360 lança novo curso, confira.'
,1
,'#Institucional #Persona360 #Lançamento #Primeiro #Home #Heroe'
,'O primeiro curso lançado pela Escola Persona360 é inovador por que é colaborativo. '
,'https://persona360.com.br/img/Persona360Logo.svg'
,'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ligula mauris. Proin turpis quam, placerat sit amet posuere in, vestibulum a neque. Morbi sit amet hendrerit velit. Nam id diam sit amet libero gravida varius ut in mauris. Nullam consectetur leo quis lectus finibus, vel scelerisque nunc faucibus. Donec rhoncus diam vel orci interdum tristique. Curabitur tempus pharetra convallis. Donec id efficitur urna. Etiam ornare urna ut purus interdum sollicitudin.</p><p>Nulla sit amet augue magna. Morbi vehicula, dui imperdiet iaculis pellentesque, augue enim suscipit quam, vel tempor sem risus vel diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris imperdiet elit euismod malesuada lacinia. Nulla vel tortor in risus porta congue. Quisque a nisi ac libero accumsan auctor. Morbi sed hendrerit sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p><p><h4>Lorem Ipsum</ha><br>Suspendisse tristique metus purus, ut sollicitudin libero pellentesque in. Maecenas pretium ante arcu, vel vestibulum urna consequat eu. Curabitur quis gravida neque. Pellentesque vehicula ante eu est tristique pellentesque. Integer in libero ut ante vehicula pharetra. Donec nec libero ligula. Suspendisse gravida molestie urna nec molestie. In malesuada justo finibus mauris pretium, eget congue dui sodales. Etiam finibus eros ac venenatis rhoncus. Praesent eget sagittis nibh. Integer iaculis consequat nibh, et cursus sem venenatis at. Fusce malesuada sem id nulla scelerisque, et bibendum erat euismod.</p>'
,1
,1
,'GETDATE()'
,'GETDATE()+30'
,1
,1
,1
,'GETDATE()'
,1
);;

IF @@ERROR = 0 
BEGIN
SELECT 0 AS err
COMMI TRAN
END
ELSE
BEGIN
SELECT @@ERROR as err
ROLLBACK TRAN
END
`
exports.Curso = ` 

-- Insere dados na tabela Curso

BEGIN TRAN

INSERT INTO Curso VALUES
(
'Curso Persona360'
,1
,1
,1
,'GETDATE()'
,1
);;

IF @@ERROR = 0 
BEGIN
SELECT 0 AS err
COMMI TRAN
END
ELSE
BEGIN
SELECT @@ERROR as err
ROLLBACK TRAN
END
`
exports.Escola = ` 

-- Insere dados na tabela Escola

BEGIN TRAN

INSERT INTO Escola VALUES
(
'Escola Persona360'
,1
,'adm.build@persona360.com.br'
,1
,'GETDATE()'
,true
);;

IF @@ERROR = 0 
BEGIN
SELECT 0 AS err
COMMI TRAN
END
ELSE
BEGIN
SELECT @@ERROR as err
ROLLBACK TRAN
END
`