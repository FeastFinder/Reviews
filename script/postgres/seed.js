// const db = require ('./index.js');
// const faker = require ('faker');

// const randomNum = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const seedRestaurants = async (quantity) => {
//   for (var i = 1; i <= quantity; i++) {
//     await db.addReview({
//       id: i,
//       name: `L${i}`
//     })
//   }
// }

// const seedUsers = async (quantity) => {
//   const background = ['#BB6ACD', '#D86441', '#6C8AE4', '#DF4E96'];
//   for (var i = 1; i <= quantity; i++) {
//     var vip = randomNum() > 7 ? true : false;
//     var name = faker.name.firstName();
//     var init = name[0];
//     if (randomNum(1, 10) > 3) {
//       var lastName = faker.name.lastName();
//       name += lastName;
//       init += lastName[0];
//     }
//     await db.addReview({
//       id: i,
//       user: name,
//       userInit: init,
//       background: background[randomNum(0, 3)],
//       loc: faker.address.city(),
//       vip: vip
//     })
//   }
// }

// const seedReviews = async (quantity) => {
//   for (var i = 1; i <= quantity*10; i++) {
//     var noiseLevel = ['Quiet', 'Moderate', 'Energetic'];
//     var review = `${faker.lorem.paragraph()}`;
//     var food = randomNum(1, 5);
//     var service = randomNum(1, 5);
//     var ambience = randomNum(1, 5);
//     var value = randomNum(1, 5);
//     var overall = (food + service + ambience + value) / 4;
//     var noise = noiseLevel[randomNum(0, 2)];
//     var recommend = faker.random.boolean();
//     var date = faker.date.past();
//     await db.addReview({
//       id: i,
//       review: review,
//       overall: overall,
//       food: food,
//       service: service,
//       ambience: ambience,
//       value: value,
//       noise: noise,
//       recommend: recommend,
//       date: date,
//       userId: randomNum(1, quantity),
//       restaurantId: randomNum(1, quantity)
//     })
//   }
// }

// seedReviews(100);