//Return all of the values of the object's own properties.
//const testObject = { name: "Neelanshi", age: 22, location: "Kota" };

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
