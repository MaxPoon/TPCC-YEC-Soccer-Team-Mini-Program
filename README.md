# Development Documentation

## How to Set Up Test Environment
* Change the host url to `'http://localhost:5757'` in `client/config.js`.
* Install Mysql 5.7. DO NOT install version 8.0 as we are using version 5.7 on production.
For Macbook, you can use brew to install it and start running the database on local machine if you have already installed brew:
```
brew install mysql@5.7
brew services start mysql@5.7
```
For PC, please follow the guideline to install Mysql 5.7: https://dev.mysql.com/doc/refman/5.7/en/windows-installation.html
* When installing the database, set empty password for `root` user.
* Log into mysql and create the cauth database (only do it at the first time):
```
mysql -u root
CREATE DATABASE cauth;
```
* Install nodemon
```
npm install -g nodemon
```
* Install server code dependencies
```
cd server
npm install
```
* Initialize the database (only do it when there's a change in database schema)
```
node tools/initdb.js test
```
* Run the server program in test mode
```
npm run dev
```

## How to Add a Table in Database

* Go to phpadmin of the test server on Tencent Cloud, manually create the table.
* Export the table and download it as `.sql` file.
* Copy the file to `server/tools/sql_tables`.
* Run `server/tools/initdb.js` on local machine and verify that all the tables can be successfully created.
* Add the file to git repo.
