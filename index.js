/*
useful string properties & methods
*/

let username = "John Wick"
let coder = "  Ravi "
let coderPhonNumber = "123-456-7890"
console.log(username.length);
console.log(username.search("o"))
console.log(username.replace(" ", "-"));
console.log(username.indexOf("n"));
console.log(username.endsWith("c"));
console.log(username.endsWith("k"));
console.log(username.startsWith("J"));
console.log(username.lastIndexOf("c"));
console.log(username.toUpperCase());
console.log(username.toLowerCase());

console.log(coder);
console.log(coder.trim());

console.log(coderPhonNumber);
console.log(coderPhonNumber.replaceAll("-", "/"));