CREATE TABLE person (
     person_id MEDIUMINT NOT NULL AUTO_INCREMENT,
     person_name VARCHAR(500) NOT NULL,
     person_email VARCHAR(500) NOT NULL,
     person_mobile VARCHAR(13) NOT NULL,
     cad_date DATETIME NOT NULL,
     is_active BIT NOT NULL,
     PRIMARY KEY (person_id)
);
