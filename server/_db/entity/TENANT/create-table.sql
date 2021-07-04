CREATE TABLE tenant (
     tenant_id MEDIUMINT NOT NULL AUTO_INCREMENT,
     tenant_name VARCHAR(500) NOT NULL,
     tenant_sa VARCHAR(64) NOT NULL,
     tenant_pw VARCHAR(64) NOT NULL,
     tenant_email VARCHAR(200) NOT NULL,
     tenant_mobile VARCHAR(15) NOT NULL,
     tenant_url VARCHAR(1000) NOT NULL,
     cad_date DATETIME NOT NULL,
     is_active BIT NOT NULL,
     PRIMARY KEY (tenant_id)
);

