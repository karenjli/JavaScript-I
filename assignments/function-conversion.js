// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();
let myFunction = () => "Function was invoked!";
console.log(myFunction());

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");
let anotherFunction = (param) => {return param};
console.log(anotherFunction("param"));

// let add = function (param1, param2) {
//   return param1 + param2;
// };
let add = (param1, param2) => param1 + param2;
console.log(add(3,4));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
let subtract = (param1, param2) => param1 - param2;
console.log(subtract(5,3));

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

