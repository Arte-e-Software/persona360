CREATE TABLE auth (
     auth_id MEDIUMINT NOT NULL AUTO_INCREMENT,
     user_id MEDIUMINT NOT NULL,
     auth_name VARCHAR(500) NOT NULL,
     auth_image VARCHAR(200) NOT NULL,
     cad_date DATETIME NOT NULL,
     is_active BIT NOT NULL,
     PRIMARY KEY (auth_id)
);
