// Like map for arrays, but for objects. Transform the value of each property in
// turn by passing it to the callback function.
// http://underscorejs.org/#mapObject
//const Obj = { neelanshi: 90, chayan: 94, aman: 80 };

const mapObject = (obj, cb) => {
  console.log(obj);
  for (let key in obj) {
    let NewValue = cb(obj[key]); //inside cb pass value it return updated value
    obj[key] = NewValue; //Adding new value to again objet
  }
  return obj;
};

module.exports = {
  PublicmapObject: mapObject,
};
