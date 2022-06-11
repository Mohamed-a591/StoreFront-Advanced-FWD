# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.  

## API Endpoints
#### Products

- Index 
    route: `/api/products/`  
    Method: GET  
    Header:
    ``` json
    {
        "x-auth-token": ${token}
    }
    ```
    Response:
    ``` json
    {
        "massage": "Ok",
        "status": 200,
        "data": [
            {
                "id": 1,
                "name": "Products Name",
                "category": "Cat-Name",
                "price": 200,
                "qty": 1000
            },
            {
                "id": 2,
                "name": "Products Name2",
                "category": "Cat-Name",
                "price": 500,
                "qty": 100
            },
            {
                "id": 3,
                "name": "Products5",
                "category": "Cat-Name2",
                "price": 500,
                "qty": 100
            },
            {
                "id": 4,
                "name": "Products4",
                "category": "Cat-Name2",
                "price": 500,
                "qty": 100
            }
        ]

    }
    ```
- Show
    route: `/api/products/get-one`  
    Method: GET  
    Body: 
    ``` json
    {
        "product_id" : 4
    }
    ```
    Header:
    ``` json
    {
        "x-auth-token": ${token}
    }
    ```
    Response:
    ```json
    {
        "massage": "Ok",
        "status": 200,
        "data": {
            "id": 4,
            "name": "Products4",
            "category": "Cat-Name2",
            "price": 500,
            "qty": 100
        }

    }
    ```
- Create [token required]
    route: `/api/products/add`  
    Method: POST  
    Body:
    ``` json
    {
        "name": "New Product",
        "category": "Cat",
        "price": 200.51,
        "qty": 50

    }
    ```
    Header:
    ``` json
    {
        "x-auth-token": ${token}
    }
    ```
    Response:
    ``` json
    {
        "massage": "Product added successfuly",
        "status": 200,
        "data": {
            "name": "New Product",
            "category": "Cat",
            "price": 200.51,
            "qty": 50,
            "jwt_payload": {
                "userid": 5,
                "iat": 1654775033
            },
            "valid": 1
        }

    }
    ```
- Products by category (args: product category)
    route: `/api/products/get-by-category`  
    Method: GET  
    Body:
    ``` json
    {
        "category_name": "Mobiles"
    }
    ```


#### Users
- Index 
    route: `/api/users`  
    Method: GET  
    Header:
    ``` json
    {
        "x-auth-token": ${token}
    }
    ```
    Response:
    ``` json
    {
        "massage": "Ok",
        "status": 200,
        "data": [
            {
                "id": 1,
                "first_name": "Mohamed",
                "last_name": "Abdel-Samie",
                "email": "esm@gmail.com",
                "phone": "01111",
                "password": "12345"
            },
            {
                "id": 2,
                "first_name": "Ahmed",
                "last_name": "Khaled",
                "email": "AKh@gmail.com",
                "phone": "02000",
                "password": "kh1234"
            },
            {
                "id": 5,
                "first_name": "Mohamed",
                "last_name": "Abdel-Samie",
                "email": "mo@gmail.com",
                "phone": "0111111111",
                "password": "$2b$10$Vc9AqXLxn.hDxDCOdGOLsu/AYx88BjqB7cNTq9MeCjfNn25pkEKxK"
            }
        ]

    }
    ```
- Show [token required]
    Route: `/api/users/get-one`    
    Method: GET  
    Body:
    ``` json
    {
        "user_id" : 1
    }
    ```
    Header:
    ``` json
    {
        "x-auth-token": ${token}
    }
    ```
    Response:
    ``` json
    {
        "massage": "User not exist",
        "status": 200,
        "data": [
            {
                "id": 1,
                "first_name": "Mohamed",
                "last_name": "Abdel-Samie",
                "email": "esm@gmail.com",
                "phone": "01111",
                "password": "12345"
            }
        ]

    }
    ```
- Create N[token required]
    Route: `/api/register`  
    Method: POST  
    Body:
    ``` json
    {
        "first_name" : "Mohamed",
        "last_name" : "Abdel-Samie",
        "phone": "0111111111",
        "email": "mod@gmail.com",
        "password": "storefront1234"

    }
    ```
    Header: 
    ``` json
    {
        "x-auth-token": ${token}
    }
    ```
    Response:
    ``` json
    {
        "massage": "User add successfuly 👌",
        "status": 200,
        "data": {
            "full_name": "Mohamed Abdel-Samie",
            "first_name": "Mohamed",
            "last_name": "Abdel-Samie",
            "email": "mo@gmail.com",
            "phone": "0111111111"
        }

    }
    ```

#### Orders
- Current Order by user (args: user id)[token required]
    route: `/api/orders/get-user-orders`  
    Method: GET  
    Body:
    ``` json
    {
        "order_id" : 15
    }
    ```
    Header:
    ``` json
    {
        "x-auth-token": ${token}
    }
    ```
    Response:
    ``` json
    {
        "massage": "Ok",
        "status": 200,
        "data": [
            {
                "user_id": 5,
                "order_id": 15,
                "product_name": "Products Name",
                "price": 200,
                "qty": 10
            },
            {
                "user_id": 5,
                "order_id": 15,
                "product_name": "Products Name2",
                "price": 500,
                "qty": 20
            },
            {
                "user_id": 5,
                "order_id": 15,
                "product_name": "Products5",
                "price": 500,
                "qty": 30
            }
        ]

    }
    ```

## Data Shapes
#### Product
Define Products Table

```js
{
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: 'string',
    category: 'string',
    price: 'int',
    qty: 'int'
}
```

Select Products table from `psql`
```
store_front=# SELECT * FROM  products;
 id |    name     | category | price | qty
----+-------------+----------+-------+-----
```

#### User Table
Define user table
``` js
{
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    first_name: { type: 'string' },
    last_name: { type: 'string' },
    email: { type: 'string' },
    phone: { type: 'string' },
    password: { type: 'string' }
}
```
Select User table from `psql`
```
store_front=# SELECT * FROM  users;
 id | first_name | last_name | email | phone | password
----+------------+-----------+-------+-------+----------
```


#### Orders

Define Order Table
``` sql
CREATE TABLE orders(
    id serial NOT NULL PRIMARY KEY, 
    products_id VARCHAR(200), 
    status BOOLEAN, 
    user_id INTEGER REFERENCES users(id)
);
```
Select Order table from `psql`
```
store_front=# SELECT * FROM orders;
 id | status | user_id
----+--------+---------
```

### Cart Table (Order, Products)
`Meny-to-Meny ` Relationship
Define cart table
``` sql
CREATE TABLE cart (
    id  serial NOT NULL PRIMARY KEY,
    order_id int REFERENCES orders(id),
    product_id int REFERENCES products(id),
    qty int 
);
```
Select Cart table from `psql`
```
store_front=# SELECT * FROM  cart;
 id | order_id | product_id | qty
----+----------+------------+----- 
```

