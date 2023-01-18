/*
slice() extracts a section of a string and returen it as a new string
         without modifying the original string 
*/
let fullName = "Nitish Gupta";
let firstName;
let lastName;

firstName = fullName.slice(fullName.indexOf(" ") + 1);
lastName = fullName.slice(0, fullName.indexOf(" "));
console.log(firstName);
console.log(lastName);
