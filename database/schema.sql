DROP DATABASE IF EXISTS doitnow;

CREATE DATABASE doitnow;

\c doitnow;

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  name VARCHAR( 500 )
);
