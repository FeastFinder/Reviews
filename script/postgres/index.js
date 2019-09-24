const { Pool } = require('pg');

const pool = new Pool({
  host: 'ec2-13-57-17-213.us-west-1.compute.amazonaws.com',
  database: 'reviewsDB',
  user: 'power_user',
  password: 'superpassword'
})

// const pool = new Pool({
//   host: 'localhost',
//   database: 'reviewsDB'
// })

exports.getTotalReviewsOfUser = (id, callback) => {
  var query = `SELECT * FROM reviews where user_id = ${id}`;
  pool.query(query, (err, res) => {
    if(err) console.log(err);
    else callback(res.rows.length);
  })
}

exports.getReviews = (id, callback) => {
  console.log('we are in controller');
  var query = `SELECT * FROM users JOIN reviews ON reviews.restaurant_id=${id} AND reviews.user_id=users.id;`;
  var totalReview = async (array, cb) => {
    console.log('in async query')
    let start = 0;
    while(start < array.length) {
      var totalQuery = `SELECT * FROM reviews WHERE user_id = ${array[start].user_id}`
      if(start !== array.length - 1) {
        await pool.query(totalQuery)
        .then((result) => {
          console.log('we are in no callback')
          array[start]["total_reviews"] = result.rows.length;
          start ++;
        })
        .catch((err) => {
          console.log(err);
        })
      } else {
        await pool.query(totalQuery)
        .then((result) => {
          console.log('we are in callback', result)
          array[start]["total_reviews"] = result.rows.length;
          start ++;
          cb(array);
        })
        .catch((err) => {
          console.log(err);
        })
      }
    }
  }
  pool.query(query, (err, res) => {
    console.log('connected!', err, res.rows);
    if(err) console.log(err);
    else totalReview(res.rows, callback);
  })
}

exports.addReview = (data, callback) => {
  var query = `INSERT INTO reviews(review, overall, food, service, ambience, value, noise, would_recommend, date, user_id, restaurant_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11);`;
  pool.query(query, data, (err, res) => {
    if (err) console.log(err);
    else callback('added', res.rows);
  })
}

exports.updateReview = (data, id, callback) => {
  var query = `UPDATE reviews SET review = $1, overall = $2, food = $3, service = $4, ambience = $5, value = $6, noise = $7, would_recommend = $8, date = $9 where id = ${id};`;
  pool.query(query, data, (err, res) => {
    if (err) console.log(err);
    else callback('updated', res.rows);
  })
}

exports.deleteReview = (id, callback) => {
  var query = `DELETE FROM reviews where id = ${id}`
  pool.query(query, (err, res) => {
    if (err) console.log(err);
    else callback('deleted', res.rows);
  })
}