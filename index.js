/*
return - returns a value back to the place where you invoked a function
*/


let area;
let width;
let hight;

width = window.prompt("enter the number of width!");
hight = window.prompt("enter the number of hight!");
area = getTrangle(width, hight);

console.log("the area is :", area);

function getTrangle(width, hight) {
    return width * hight;
}