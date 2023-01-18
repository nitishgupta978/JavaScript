/*
Type Conversion : convert data type to another data type
*/

let age = window.prompt("Enter your ages ");
console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;

console.log("Your age is ", age, "now it's you birthday");

let x;
let y;
let z;

x = String("Nitish ");
y = Number(1234.99);
z = Boolean("gkj");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
