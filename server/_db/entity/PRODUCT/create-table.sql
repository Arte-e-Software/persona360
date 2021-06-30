CREATE TABLE product (
     product_id MEDIUMINT NOT NULL AUTO_INCREMENT,
     user_id MEDIUMINT NOT NULL,
     product_name VARCHAR(500) NOT NULL,
     product_type VARCHAR(100) NOT NULL,
     product_description VARCHAR(5000) NOT NULL,
     product_image VARCHAR(200) NOT NULL,
     product_allow_comments BIT NOT NULL,
     cad_date DATETIME NOT NULL,
     ini_pub_date DATETIME NOT NULL,
     end_pub_date DATETIME,
     is_active BIT NOT NULL,
     PRIMARY KEY (product_id)
);

