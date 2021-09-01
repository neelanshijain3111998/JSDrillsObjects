//Returns a copy of the object where the keys have become the values and the values the keys.
const id1 = require("../invert.js");
const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

console.log(id1.PublicInvert(testObject));
