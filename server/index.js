const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../script/postgres/index.js');
const path = require('path');
const compression = require('compression');
require('newrelic');

const PORT = 3003;

// app.use(express.static(path.join(__dirname,  '../public/loader')));
app.use('/:id/', express.static(path.join(__dirname,  '../public')));

app.use(bodyParser.json());

app.use(compression());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/loaderio-0f2da847ac5d799054b22fe048366a2b', (req, res) => {
  res.send('loaderio-0f2da847ac5d799054b22fe048366a2b');
})

app.get('/api/:restID/reviews', (req, res) => {
  db.getReviews(req.params.restID, (reviews) => {
    res.send(reviews);
  })
});

app.post('/api/:restID/reviews', (req, res) => {
  // req.params.restID
  // var fakeData = ['Quo modi eligendi. Atque amet qui aperiam exercitationem ipsum ipsam. Dignissimos dolorum totam velit dolores. Vel odio mollitia. Laboriosam assumenda sit ut ab enim in.', 3.5, 3, 2, 5, 4, 'Quiet', false, '2019-05-16T03:15:39.498Z', 5253935, 1552979]
  var data = req.body;
  db.addReview(data, () => {
    res.send('posted');
  });
});

app.put('/api/:restID/reviews/:id', (req, res) => {
  var data = []; //generate from req.body
  // var fakeData = ['Quo modi eligendi. Atque amet qui aperiam exercitationem ipsum ipsam. Dignissimos dolorum totam velit dolores. Vel odio mollitia. Laboriosam assumenda sit ut ab enim in.', 3.5, 3, 2, 5, 4, 'Quiet', false, '2019-05-16T03:15:39.498Z', 5253935, 1552979]
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
