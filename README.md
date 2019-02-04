# Development Documentation

## How to Set Up Test Environment
* Change the host url to `'http://localhost'` in `client/config.js`.
* Install nodemon<br> 
```
npm install -g nodemon
```<br>
* Install server code dependencies<br>
```
cd server
npm install
```
* Initialize the database (only do it when there's a change in database schema)<br>
```
node tools/initdb.js
```
* Run the server program in test mode<br>
```
npm run dev
```

## How to Add a Table in Database

* Go to phpadmin of the test server on Tencent Cloud, manually create the table.
* Export the table and download it as `.sql` file.
* Copy the file to `server/tools/sql_tables`.
* Run `server/tools/initdb.js` on local machine and verify that all the tables can be successfully created.
* Add the file to git repo.