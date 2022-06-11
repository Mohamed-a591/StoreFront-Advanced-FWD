# Storefront Backend Project FWD
Name: **Mohamed Abdel-Samie**  
Email: **mohamed.abdelsamie3009@gmail.com**

<hr>

## Getting Started

This repo contains a basic Node and Express app to get you started in constructing an API. To get started, clone this repo and run `npm` in your terminal at the project root.

The app is a simple store Restful Api to manage orders, products, and users.

### Main technologies used at the project
- Express - Nodejs
- Jasmine for unit testing
- PostgreSQL
- db-migrate for database Maigrations
- dotenv and morgan
- bcrypt
- AJV for request validation
- Eslint
- Prettierr

## .Env Variables and running information 
There is an `.exaple.env` file to make your configuration

DB configration
``` .env
DB_DRIVER=pg
DB_HOST=localhost
DB_PORT=5432
DB_NAME=store_front
DB_USERNAME=postgres
DB_PASSWORD=****
```

Running port
```
PORT= 5000
```

## Requirements To Run The Project

Your enviroment must setup with:

- posrgreSQL databases called `store_front` for dev enviroment and `test_store_front` for test enviroment

To migrate the tables at the DB
``` bash
db-migrate up
```

## Steps to Deal wiht project

After download the project run
``` bash
npm i  // to install packges
```
Then run
``` bash
npm start // to run the building js files

// or

npm run dev // to run the ts files
```
Now the project will be run at localhost 5000

### Let's start visit **Endpoints**
You cant cheek all endpoint thow api documentation
[APIs Collection](https://documenter.getpostman.com/view/11802737/Uz5JGagG)

### Auth APIs

Request [POST] `/api/register`

``` json
// request body
{
    "first_name" : "Mohamed",
    "last_name" : "Abdel-Samie",
    "phone": "0111111111",
    "email": "mohamed.abdelsamie3009@gmail.com",
    "password": "storefront1234"
}
```
Response

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
The query recorded at the database at now the user can login

<hr>

Request [POST] `/api/login`

``` json
{
    "email": "mohamed.abdelsamie3009@gmail.com",
    "password": "storefront1234"
}
```

Response:

``` json
{
    "massage": "Logged-in successfuly 👌",
    "status": 200,
    "data": {
        "full_name": "Mohamed Abdel-Samie",
        "email": "mo@gmail.com",
        "phone": "0111111111"
    }
}
```
and the header set by user **Token using JWT** at key `x-auth-token`

### Example Products endpoints

Add Request [POST] `/api/products/add`
- Set request header by `x-auth-token` and pass the user token
- Body data 
    ```json
    // body data
    {
        "name": "New Product",
        "category": "Cat",
        "price": 200.51,
        "qty": 50
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
            "userid": 3,
            "iat": 1654545157
        },
        "valid": 1
    }
}
```

## Projsct unit testing

Run 
```bash
npm run test
```
To test the `Models` and `Endpoints` for each table [Users, Products, Orders]
