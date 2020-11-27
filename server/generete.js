module.exports = function () {
  const faker = require("faker");
  const _ = require("lodash");
  return {
    entities: _.times(100, function (n) {
      return {
        id: n,
        price: faker.random.number(),
        rooms: 5,
        squaring: 300,
        isLiked: faker.random.boolean(),
      };
    }),
  };
};
