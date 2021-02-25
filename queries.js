const db = require('mysql');

const connection = db.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'nasa_database'
});

connection.connect((err) => {
  if (err) {
    console.log(err)
  } else console.log('connected to mysql');
});