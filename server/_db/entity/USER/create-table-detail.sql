CREATE TABLE user_detail (
     user_detail_id MEDIUMINT NOT NULL AUTO_INCREMENT,
     user_id MEDIUMINT NOT NULL,
     cad_user_id MEDIUMINT NOT NULL, -- FK for 
     user_detail_title VARCHAR(500) NOT NULL,
     user_detail_subtitle VARCHAR(100) NOT NULL,
     user_detail VARCHAR(5000) NOT NULL,
     user_detail_image VARCHAR(200) NOT NULL,
     user_detail_allow_comments BIT NOT NULL,
     cad_date DATETIME NOT NULL,
     ini_pub_date DATETIME NOT NULL,
     end_pub_date DATETIME,
     is_active BIT NOT NULL,
     PRIMARY KEY (user_detail_id)
);

