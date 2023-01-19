/*
variables operator - where a variable is accessible    

1. let - variables are limited to the block scope{}, 
2. var - variable are limited to the function scope(){},

globle variable  = is declared outside any function
"if globle, var will CHANGE browsers windows properties"
*/

/*
 for 1 let its persant in block scope

for (let i = 0; i <= 4; i += 1) {
    console.log(i);
}
// for 1 let its outside the block scope
for (let i = 0; i <= 9; i += 1) {
}
console.log(i);

*/
let name = "John"; // globle 
getValues();
function getValues() {
    for (var i = 0; i <= 4; i += 1) {

    }
    console.log(i);
}


/* for 2 var its not work out side the function
function getValues() {
    for (i = 0; i <= 4; i += 1) {

    }
}
console.log(i);

*/
