const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviewsDB', {useNewUrlParser: true});

//restaurant table
const restaurantsSchema = new mongoose.Schema({
  id: Number,
  name: String
})

const usersSchema = new mongoose.Schema({
  id: Number,
  user: String,
  user_initials: String,
  initials_background: String,
  location: String,
  vip: Boolean
})

const reviewsSchema = new mongoose.Schema({
  id: Number,
  review: String,
  overall: Number,
  food: Number,
  service: Number,
  ambience: Number,
  value: Number,
  noise: {type: String, enum: ['Quiet', 'Moderate', 'Energetic']},
  would_recommend: Boolean,
  date: Date,
  user_id: Number,
  restaurant_id: Number
})

let Restaurants = mongoose.model('restaurants', restaurantsSchema);
let Reviews = mongoose.model('reviews', reviewsSchema);
let Users = mongoose.model('users', usersSchema);

const addRestaurant = (data) => {
  var restaurant = new Restaurants({
    id: data.id,
    name: data.name
  })
  return new Promise((resolve, reject) => {
    Restaurants.collection.insertOne(restaurant, (err) => {
      if (err) reject(console.log('err occured when adding to restaurant, error: ', err));
      else {
        resolve(console.log(data.id, ' restaurant added'));
      }
    })
  })
}

const addUser = (data) => {
  var user = new Users({
    id: data.id,
    username: data.user,
    user_initials: data.userInit,
    initials_background: data.background,
    location: data.loc,
    vip: data.vip,
    total_reviews: data.totalRev
  })
  return new Promise((resolve, reject) => {
    Users.collection.insertOne(user, (err) => {
      if (err) reject(console.log('err occured when adding to user, error: ', err));
      else {
        resolve(console.log(data.id, ' user added'));
      }
    })
  })
}

const addReview = (data) => {
  var review = new Reviews({
    id: data.id,
    review: data.review,
    overall: data.overall,
    food: data.food,
    service: data.service,
    ambience: data.ambience,
    value: data.value,
    noise: data.noise,
    would_recommend: data.recommend,
    date: data.date,
    user_id: data.userId,
    restaurant_id: data.restaurantId
  })
  return new Promise((resolve, reject) => {
    Reviews.collection.insertOne(review, (err) => {
      if (err) reject(console.log('err occured when adding to review, error: ', err));
      else {
        resolve(console.log(data.id, ' review added'));
      }
    })
  })
}

module.exports = { addReview, addUser, addRestaurant };