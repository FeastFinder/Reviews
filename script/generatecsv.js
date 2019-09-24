const faker = require('faker');
const fs = require('fs');

const write = (writer, data) => {
  return new Promise((resolve) => {
    if (!writer.write(data)) {
      writer.once('drain', resolve);
    } else {
      resolve();
    }
  })
}

const generate = async (filePath, num, iterator) => {
  const ws = fs.createWriteStream(filePath);
  const max = num;
  let current = 1;
  while (current <= max) {
    await write(ws, iterator(current, num));
    current++;
  }
  await console.log(filePath, 'created');
}

const randomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const restaurant = (quantity) => {
  return `L${quantity}\n`
}

const user = (quantity) => {
  const background = ['#BB6ACD', '#D86441', '#6C8AE4', '#DF4E96'];
  var vip = randomNum(1, 10) > 7 ? true : false;
  var name = faker.name.firstName();
  var init = name[0];
  if (randomNum(1, 10) > 3) {
    var lastName = faker.name.lastName();
    name += lastName;
    init += lastName[0];
  }
  return `${name},${init},${background[randomNum(0, 3)]},${faker.address.city()},${vip}\n`
}

const review = (quantity) => {
  var noiseLevel = ['Quiet', 'Moderate', 'Energetic'];
  var review = faker.lorem.paragraph();
  var food = randomNum(1, 5);
  var service = randomNum(1, 5);
  var ambience = randomNum(1, 5);
  var value = randomNum(1, 5);
  var overall = (food + service + ambience + value) / 4;
  var noise = noiseLevel[randomNum(0, 2)];
  var recommend = faker.random.boolean();
  var date = faker.date.past().toISOString();
  return `${review},${overall},${food},${service},${ambience},${value},${noise},${recommend},${date},${randomNum(1, 9999999)},${randomNum(1, 9999999)}\n`
}

// generate('rest.csv', 9999999, restaurant);
// generate('user.csv', 9999999, user);
generate('review2.csv', 100000, review);