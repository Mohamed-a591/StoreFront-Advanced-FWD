CREATE TABLE orders(
    id serial NOT NULL PRIMARY KEY, 
    status BOOLEAN, 
    user_id INTEGER REFERENCES users(id)
);