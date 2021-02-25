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
      console.log(apiResponse.data);
      queries.postPicture(apiResponse.data, (err, data) => {
        console.log(data);
      })
    })
    .catch(err => res.status(500).send('errrrrerr'));
});

app.listen(port, () => {
  console.log(path.join(__dirname,'./client/src'))
  console.log (`Listening on port ${port}`)
})