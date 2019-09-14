const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'reviewsDB'
})

const addReview = (data) => {
  var query = `INSERT INTO reviews (review, overall, food, service, ambience, value, noise, would_recommend, date, user_id, restaurant_id) VALUES ("${data.review}", ${data.overall}, ${data.food}, ${data.service}, ${data.ambience}, ${data.value}, ${data.noise}, ${data.recommend}, "${data.date}", ${data.userId}, ${data.restaurantId});`;
  // var params = [data.review, data.overall, data.food, data.service, data.ambience, data.value, data.noise, data.recommend, data.date, data.userId, data.restaurantId];
  pool.query(query, (err, res) => {
    if (err) console.log(err, query);
    else {console.log(data.id, 'review added')}
  })
}

module.exports = { addReview }