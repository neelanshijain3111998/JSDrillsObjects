const StudentMarks = { neelanshi: 90, chayan: 94, aman: 80 };

const AddFive = (value) => value + 5; //Adding 5 to each value of each key
const id1 = require("../mapObject.js");
console.log(id1.PublicmapObject(StudentMarks, AddFive));
