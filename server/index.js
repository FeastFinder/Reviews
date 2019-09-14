const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const path = require('path');
const compression = require('compression');

const PORT = 3003;


app.use(express.static(path.join(__dirname,  '../public')));

app.use(bodyParser.json());

app.use(compression());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/:restaurantName/reviews', (req, res) => {

});

app.post('/api/:restaurantName/reviews', (req, res) => {

});

app.put('/api/:restaurantName/reviews/:id', (req, res) => {

});

app.delete('/api/:restaurantName/reviews/:id', (req, res) => {

});

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});
