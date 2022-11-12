DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  profile_image VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL
);

INSERT INTO users (username, profile_image, description) VALUES ('John', 'https://image.shutterstock.com/image-photo/stock-photo-head-shot-young-attractive-businessman-in-glasses-standing-in-modern-office-pose-for-camera-250nw-1854697390.jpg', 'Hello'); 
INSERT INTO users (username, profile_image, description) VALUES ('Chris', 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg', 'Hello'); 
INSERT INTO users (username, profile_image, description) VALUES ('Sam', 'https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg', 'Hello'); 
