// Fill in undefined properties that match properties on the `defaultProps` parameter object.
// Return `obj`.
// http://underscorejs.org/#defaults

const testObject = { name: "Neelanshi", age: 22, location: "Kota" };
const defaultObj = { age: 23, nationality: "Indian" };

const id1 = require("../defaults.js");
console.log(id1.Publicdefaults(testObject, defaultObj));
