const express = require('express');
const axios = require('axios');
const path = require('path');
const key = require('./key.js');
const port = 8082;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'./client/dist')));

app.get('/api/picture', (req, res) => {
  console.log('hello')
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key.KEY}`)
    .then(nasaData => {
      console.log(nasaData.data);
      res.send(nasaData);
    })
    .catch(err => {
      res.status(500).send(err);
    })
});

app.listen(port, () => {
  console.log(path.join(__dirname,'./client/src'))
  console.log (`Listening on port ${port}`)
})