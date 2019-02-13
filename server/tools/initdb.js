const fs = require('fs');
const path = require('path');
const { mysql: config } = require('../config');

console.log('\n======================================');
console.log('Started to initialize the database...');

// Init the file paths
const INIT_DB_FILE = path.join(__dirname, './cAuth.sql');
const SQL_TABLE_FILES_DIR = path.join(__dirname, './sql_tables');

const DB = require('knex')({
  client: 'mysql',
  connection: {
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.pass,
    database: config.db,
    charset: config.char,
    multipleStatements: true
  }
});

console.log(`Reading the file: ${INIT_DB_FILE}`);

// Read the sql file
var content = fs.readFileSync(INIT_DB_FILE, 'utf8');

console.log('Started to run the sql files.');

// Run the query in sql files
DB.raw(content).then(async res => {
  sqlTableFileNames = fs.readdirSync(SQL_TABLE_FILES_DIR);
  for (var fileName of sqlTableFileNames) {
    console.log(`Reading the table sql file: ${fileName}`);
    content = fs.readFileSync(path.join(SQL_TABLE_FILES_DIR, fileName), 'utf8');
    await DB.raw(content);
  }
  console.log('Successfully initialized the database!')
  process.exit(0);
}, err => {
  throw new Error(err);
});
