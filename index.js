/*
if statement - if statement show conditions like 
               if it is true than do it other wise don't do this!
*/

let age = 18;

document.getElementById("aButton").onclick = function () {
    if (age <= 18) {
        console.log("You are an adult!");
    } else if (age >= 18 && age <= 30) {
        console.log("Now You are not adult Person!")
    } else if (age >= 50 && age <= 85) {
        console.log("You are Senior citizen!")
    } else {
        console.log("You are not alive")
    }
}