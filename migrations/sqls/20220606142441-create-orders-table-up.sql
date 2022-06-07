CREATE TABLE orders(
    id serial NOT NULL PRIMARY KEY, 
    products_id VARCHAR(200), 
    status BOOLEAN, 
    user_id INTEGER REFERENCES users(id)
);