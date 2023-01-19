/*
nested loop - a loop inside another loop
*/


/*
for (let i = 1; i <= 4; i += 1) {
    for (let j = 1; j <= 4; j += 1) {
        console.log(j);
    }

}
*/


let symbol = window.prompt("enter you favorite symbol!");
let rows = window.prompt("enter row number!");
let column = window.prompt("enter column number!");

for (let i = 1; i <= rows; i += 1) {
    for (let j = 1; j <= column; j += 1) {
        document.getElementById("myLable").innerHTML += symbol;
    }
    document.getElementById("myLable").innerHTML += "<br>";
}