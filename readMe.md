## Profile Creation Application

### Overview
- Profiles are user accounts which are created to save information regarding users to server them better in a system. Generally it compromised with APIs to get/create/update profiles of users.

### Getting Started with Application
Prerequisite
- Node.js Version 10
- Redis

Clone the repository
```sh
  > git clone https://github.com/shoaibrayeen/Profile-Creation-Application
  > cd Profile-Creation-Application/Profile Management System
```

Setting up with MySQL
```
  # Create a database user with your MySQL Terminal
  for example, if user is root.
  
  mysql -u root -p
  password
  and then
  mysql> use PMS; //Use Database Name;
  mysql> Create Tables mentioned in query.sql ( Can copy Create Table command directly)
  
  Now update user, password and database in `db/connection.js` file. Alternatively, you can create database and create tables using one timer.
```
Install required dependencies
```sh
  > npm install
```
Starting with App
```
  npm start
  # Now go to your browser and run
  localhost:3000
  # Your app is running
```

To Use Model
```sh
  # To see all the database using MySQL
  > mysql -u root -p
  mysql >>> use DATABASE_NAME;
  mysql >>> SELECT * FROM TABLE_NAME;
  
  mysql > describe users;
  +------------+--------------+------+-----+-------------------+-----------------------------+
  | Field      | Type         | Null | Key | Default           | Extra                       |
  +------------+--------------+------+-----+-------------------+-----------------------------+
  | username   | varchar(500) | NO   | PRI | NULL              |                             |
  | name       | varchar(100) | NO   |     | NULL              |                             |
  | email      | varchar(500) | NO   | UNI | NULL              |                             |
  | contact    | varchar(500) | NO   | UNI | NULL              |                             |
  | created_at | datetime     | NO   |     | CURRENT_TIMESTAMP |                             |
  | updated_at | datetime     | NO   |     | CURRENT_TIMESTAMP | on update CURRENT_TIMESTAMP |
  +------------+--------------+------+-----+-------------------+-----------------------------+

  mysql > describe credentials;
  +------------+--------------+------+-----+-------------------+-----------------------------+
  | Field      | Type         | Null | Key | Default           | Extra                       |
  +------------+--------------+------+-----+-------------------+-----------------------------+
  | username   | varchar(500) | NO   | PRI | NULL              |                             |
  | password   | varchar(500) | NO   |     | NULL              |                             |
  | status     | varchar(10)  | NO   |     | active            |                             |
  | created_at | datetime     | NO   |     | CURRENT_TIMESTAMP |                             |
  | updated_at | datetime     | NO   |     | CURRENT_TIMESTAMP | on update CURRENT_TIMESTAMP |
  +------------+--------------+------+-----+-------------------+-----------------------------+

```

To Use Postman API
```sh
  # After Starting Server
  # Go to POSTMAN APP
  
  GET localhost:3000/ping #checks info
  
  POST localhost:3000/users/ping #check user info
  
  POST localhost:3000/users # pass info in body to create user
  
```

### Starting From Scratch
```sh
  # after installing node.js, mysql server, redis and npm

  $ mkdir demo
  $ cd demo
  
  $ touch server.js
  $ npm init
  $ npm install express-generator -g # to create demo app
  $ add dependency acc to your requirements
  $ make a ping routes and check if it's working or not
  $ npm start 
  # check on the browser
  localhost:3000/ping
```
### License
[![Apache License](https://img.shields.io/badge/license-Apache-brightgreen.svg)](http://www.apache.org/licenses/)

**Copyright (c) 2020-2021 Mohd Shoaib Rayeen**

This project is licensed under the Apache License - see the LICENSE file for details
