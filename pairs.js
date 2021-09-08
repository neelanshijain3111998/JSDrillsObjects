//const testObject = { name: "Neelanshi", age: 36, location: "Kota" };

const pairs = (Obj) => {
  let listt = [];

  for (const key in Obj) {
    listt.push([key, Obj[key]]); //push [key, value] inside list
  }
  return listt; //return list of key value pairs
};

module.exports = {
  PublicPairs: pairs,
};
