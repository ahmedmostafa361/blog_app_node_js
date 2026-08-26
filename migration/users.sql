-- create table users
CREATE TABLE users (
    id               SERIAL PRIMARY KEY,
    email            VARCHAR(255) UNIQUE NOT NULL check ( position('@' in email)>0 ) ,
    name         VARCHAR(255)  NOT NULL,
    password    VARCHAR(255) NOT NULL,
    created_at       TIMESTAMP DEFAULT now()
);

-- rename username to name
