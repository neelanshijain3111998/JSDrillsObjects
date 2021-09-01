// Fill in undefined properties that match properties on the `defaultProps` parameter object.
// Return `obj`.
// http://underscorejs.org/#defaults

//const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };
//const defaultObj = { age: 46, nationality: "Indian" };

const defaults = (obj, defaultProps) => {
  for (let key in defaultProps) {
    obj[key] = defaultProps[key]; // if key already exist then it will update otherwise add new key value pair
  }
  return obj;
};

module.exports = {
  Publicdefaults: defaults,
};
