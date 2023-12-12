// For WAY - 1
// const car = require("./car");
// console.log(car);

//For WAY - 2
// const {data} = require("./car.js"); // {} needed when we exported multiple objects, else no need.
// console.log(data);

//For WAY - 3;
const {car, car2} = require("./car.js"); //name should be same in both exporting and requireing one
console.log(car);
console.log(car2);
console.log(JSON.stringify(car, null, 2));
console.log(JSON.stringify(car2, undefined, 3)); // 3rd argument is for indentation.