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

const getPicture = (id, callback) => {
  connection.query('SELECT picture from nasa WHERE id = ?', [id], (err, picture) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, picture);
    }
  })
}

const postPicture = (nasaInfo, callback) => {
  connection.query('INSERT INTO nasa (picture, title) VALUES (?, ?)', [nasaInfo.url, nasaInfo.title], (err, picture) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, picture);
    }
  })
};



// const postPicture = (nasaInfo) => {
//   return new Promise ((resolve,reject) => {
//     connection.query ('INSERT INTO nasa (picture, title) VALUES (?, ?)', [nasaInfo.data.url, nasaInfo.data.title], (err, picture) => {
//       if (err) {
//         return reject (err);
//       } else {
//         console.log('picture', picture);
//         return resolve (picture);
//       }
//     })
//   })
// }




module.exports = {
  getPicture,
  postPicture
}