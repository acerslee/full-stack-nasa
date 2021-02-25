DROP DATABASE IF EXISTS nasa_database;

CREATE DATABASE nasa_database;

USE nasa_database;


CREATE TABLE if not exists nasa(
  id integer AUTO_INCREMENT PRIMARY KEY,
  picture varchar(255),
  title varchar(255)
);