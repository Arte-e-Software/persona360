CREATE TABLE user (
     user_id MEDIUMINT NOT NULL AUTO_INCREMENT,
     person_id MEDIUMINT NOT NULL,
     cad_user_id MEDIUMINT NOT NULL,
     user_name VARCHAR(150) NOT NULL,
     user_password VARCHAR(150) NOT NULL,
     cad_date DATETIME NOT NULL,
     is_active BIT NOT NULL,
     PRIMARY KEY (user_id)
);

