CREATE TABLE cart (
    id  serial NOT NULL PRIMARY KEY,
    order_id int REFERENCES orders(id),
    product_id int REFERENCES products(id),
    qty int 
);