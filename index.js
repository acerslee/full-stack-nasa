const express = require('express');
const axios = require('axios');
const path = require('path');
const key = require('./key.js');
const port = 8085;
const queries = require('./queries.js');

const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'./client/dist')));

app.get('/api/picture', (req, res) => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key.KEY}`)
    .then(apiResponse => {
      queries.getPictureByTitle(apiResponse.data, (err, data) => {
        if (!data[0]) {
          queries.postPicture(apiResponse.data, (err, picture) => {
          if (err) {
            throw err
          } else {
            res.send(picture);
          }
          })
        } else {
          res.send(data[0].picture);
        }
      })
    })
    .catch(err => res.status(500).send(err));
});

app.listen(port, () => {
  console.log(path.join(__dirname,'./client/src'))
  console.log (`Listening on port ${port}`)
})