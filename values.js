//Return all of the values of the object's own properties.
const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

const values = (Obj) => {
  Arrayy = [];
  for (const key in Obj) {
    Arrayy.push(Obj[key]); //push values inside array
  }
  return Arrayy;
};

module.exports = {
  PublicValues: values,
};
