CREATE TABLE person_detail (
     person_detail_id MEDIUMINT NOT NULL AUTO_INCREMENT,
     person_id MEDIUMINT NOT NULL,
     user_id MEDIUMINT NOT NULL,
     person_detail_title VARCHAR(500) NOT NULL,
     person_detail_subtitle VARCHAR(100) NOT NULL,
     person_detail VARCHAR(5000) NOT NULL,
     person_detail_image VARCHAR(200) NOT NULL,
     person_detail_allow_comments BIT NOT NULL,
     cad_date DATETIME NOT NULL,
     ini_pub_date DATETIME NOT NULL,
     end_pub_date DATETIME,
     is_active BIT NOT NULL,
     PRIMARY KEY (person_detail_id)
);
