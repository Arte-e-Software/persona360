CREATE TABLE group_of_user (
     group_of_user_id MEDIUMINT NOT NULL AUTO_INCREMENT,
     group_of_if MEDIUMINT NOT NULL,
     user_id MEDIUMINT NOT NULL,
     cad_user_id MEDIUMINT NOT NULL,
     cad_date DATETIME NOT NULL,
     is_active BIT NOT NULL,
     PRIMARY KEY (group_of_user_id)
);

