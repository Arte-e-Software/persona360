CREATE TABLE content_detail (
     content_detail_id MEDIUMINT NOT NULL AUTO_INCREMENT,
     content_id MEDIUMINT NOT NULL,
     user_id MEDIUMINT NOT NULL,
     content_detail_title VARCHAR(500) NOT NULL,
     content_detail_subtitle VARCHAR(100) NOT NULL,
     content_detail VARCHAR(5000) NOT NULL,
     content_detail_image VARCHAR(200) NOT NULL,
     content_detail_allow_comments BIT NOT NULL,
     cad_date DATETIME NOT NULL,
     ini_pub_date DATETIME NOT NULL,
     end_pub_date DATETIME,
     is_active BIT NOT NULL,
     PRIMARY KEY (content_detail_id)
);
