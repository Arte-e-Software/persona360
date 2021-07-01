CREATE TABLE group_of_product (
     group_of_product_id MEDIUMINT NOT NULL AUTO_INCREMENT,
     group_of_if MEDIUMINT NOT NULL,
     product_id MEDIUMINT NOT NULL,
     user_id MEDIUMINT NOT NULL,
     cad_date DATETIME NOT NULL,
     is_active BIT NOT NULL,
     PRIMARY KEY (group_of_product_id)
);

