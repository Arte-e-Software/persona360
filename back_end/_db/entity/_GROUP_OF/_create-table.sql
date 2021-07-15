CREATE TABLE group_of (
     group_of_id MEDIUMINT NOT NULL AUTO_INCREMENT,
     user_id MEDIUMINT NOT NULL,
     group_of_name VARCHAR(500) NOT NULL,
     group_of_image VARCHAR(200) NOT NULL,
     cad_date DATETIME NOT NULL,
     is_active BIT NOT NULL,
     PRIMARY KEY (group_of_id)
);

