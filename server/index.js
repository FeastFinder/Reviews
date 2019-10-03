const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../script/postgres/index.js');
const path = require('path');
const compression = require('compression');
const redis = require('redis');
const responseTime = require('response-time');

require('newrelic');

const PORT = 3003;

const redisClient = redis.createClient();

//check conncetion to redis;
redisClient.on('connect', function() {
  console.log('Redis client connected');
});

app.use(express.static(path.join(__dirname,  '../public')));

app.use(bodyParser.json());

app.use(compression());

app.use(responseTime());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

//loader config
app.get('/loaderio-06ced2f563ed6f04001681419edf8e74.txt', (req, res) => {
  res.send('loaderio-06ced2f563ed6f04001681419edf8e74');
})

app.get('/api/:restID/reviews', (req, res) => {
  redisClient.get(`reviews:${req.params.restID}`, (err, reply) => {
    if(reply) {
      const result = JSON.parse(reply);
      res.send(result);
    } else {
      db.getReviews(req.params.restID, (reviews) => {
        redisClient.setex(`reviews:${req.params.restID}`, 14400, JSON.stringify(reviews))
        res.send(reviews);
      })
    }
  })
});

app.post('/api/:restID/reviews', (req, res) => {
  var data = req.body;
  db.addReview(data, () => {
    res.send('posted');
  });
});

app.put('/api/:restID/reviews/:id', (req, res) => {
  var data = req.body;
  db.addReview(data, req.params.id, () => {
    res.send('posted');
  });
});

app.delete('/api/:restID/reviews/:id', (req, res) => {
  db.deleteReview(req.params.id, () => {
    res.send('deleted');
  })
});

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});
