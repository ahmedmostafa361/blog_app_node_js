-- create table blogs
CREATE TABLE blogs (
    id              SERIAL            PRIMARY KEY,
    title           VARCHAR(255)      NOT NULL,
    description     TEXT              NOT NULL,
    author_id       INT               NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at      TIMESTAMP         DEFAULT now()
);

-- version 2 create new column boolean if is_deleted and not null
ALTER TABLE blogs ADD COLUMN is_deleted BOOLEAN NOT NULL DEFAULT FALSE;

select * from blogs;