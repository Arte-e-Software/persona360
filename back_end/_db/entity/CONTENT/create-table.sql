CREATE TABLE content (
     content_id MEDIUMINT NOT NULL AUTO_INCREMENT,
     user_id MEDIUMINT NOT NULL,
     content_title VARCHAR(500) NOT NULL,
     content_subtitle VARCHAR(100) NOT NULL,
     content VARCHAR(5000) NOT NULL,
     content_image VARCHAR(200) NOT NULL,
     content_allow_comments BIT NOT NULL,
     cad_date DATETIME NOT NULL,
     ini_pub_date DATETIME NOT NULL,
     end_pub_date DATETIME,
     is_active BIT NOT NULL,
     PRIMARY KEY (content_id)
);
