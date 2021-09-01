//Returns a copy of the object where the keys have become the values and the values the keys.
//const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

const invert = (testObject) => {
  let newObject = {};

  //The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
  for (const KeyValueArray of Object.entries(testObject)) {
    let key = KeyValueArray[0];
    let value = KeyValueArray[1];
    newObject[value] = key; //invert key value
  }
  return newObject;
};

module.exports = {
  PublicInvert: invert,
};

/*
How Object.entries() work?
const object1 = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }
  
  // output:
  // "a: somestring"
  // "b: 42"
  */
