CREATE TABLE group_of_content (
     group_of_content_id MEDIUMINT NOT NULL AUTO_INCREMENT,
     group_of_if MEDIUMINT NOT NULL,
     content_id MEDIUMINT NOT NULL,
     user_id MEDIUMINT NOT NULL,
     cad_date DATETIME NOT NULL,
     is_active BIT NOT NULL,
     PRIMARY KEY (group_of_content_id)
);

