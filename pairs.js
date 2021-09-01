//const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

const pairs = function (Obj) {
  let listt = [];

  for (const key in Obj) {
    listt.push([key, Obj[key]]); //push [key, value] inside list
  }
  return listt; //return list of key value pairs
};

module.exports = {
  PublicPairs: pairs,
};
