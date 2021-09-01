// Fill in undefined properties that match properties on the `defaultProps` parameter object.
// Return `obj`.
// http://underscorejs.org/#defaults

const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };
const defaultObj = { age: 46, nationality: "Indian" };

const id1 = require("../defaults.js");
console.log(id1.Publicdefaults(testObject, defaultObj));
