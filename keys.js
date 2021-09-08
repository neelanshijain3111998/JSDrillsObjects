//Retrieve all the names of the object's own enumerable properties.
//const testObject = { name: "Neelanshi", age: 36, location: "Kota" };

const keys = (Obj) => {
  Arrayy = [];
  for (const key in Obj) {
    Arrayy.push(key); //push keys inside array
  }
  return Arrayy;
};
module.exports = {
  Publickeys: keys,
};
