DROP TABLE IF EXISTS reviews, restaurants, users;

DROP TYPE IF EXISTS noise;

CREATE TYPE noise AS ENUM ('Quiet', 'Moderate', 'Energetic');

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(20) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  "user" TEXT NOT NULL,
  user_initials varchar(2) NOT NULL,
  initials_background varchar(20) NOT NULL,
  location TEXT NOT NULL,
  vip BOOLEAN NOT NULL
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  review TEXT NOT NULL, 
  overall REAL NOT NULL,
  food REAL NOT NULL,
  service REAL NOT NULL,
  ambience REAL NOT NULL,
  value REAL NOT NULL,
  noise noise NOT NULL,
  would_recommend BOOLEAN NOT NULL,
  date TIMESTAMP WITH TIME ZONE NOT NULL,
  restaurant_id INT NOT NULL REFERENCES restaurants(id),
  user_id INT NOT NULL REFERENCES users(id)
); 

CREATE INDEX ON reviews(restaurant_id);
CREATE INDEX ON reviews(user_id);
