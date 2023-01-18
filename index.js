/*
UserInput parameters
*/
let a;
let b;
let c;
/*
a = window.prompt("Enter number of Side A ");
a = Number(a);

b = window.prompt("Enter number of Side B ");
b = Number(b);

// c = Math.pow(a, 2)+ Math.pow(b,2);
c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log(c);
*/

document.getElementById("myButton").onclick = function () {
    a = document.getElementById("aText").value;
    a = Number(a);

    b = document.getElementById("bText").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    c = document.getElementById("clable").innerHTML = " sqrt value of(sum of power of Side a and b) Side c is :" + c;
}