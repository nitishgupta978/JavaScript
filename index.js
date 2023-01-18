/*
Dies = three dies roll game
*/

let x;
let y;
let z;
let a;

document.getElementById("roll").onclick = function () {
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;
    a = Math.abs(x + y + z);


    document.getElementById("xLable").innerHTML = x;
    document.getElementById("yLable").innerHTML = y;
    document.getElementById("zLable").innerHTML = z;
    document.getElementById("aLable").innerHTML = "Sum of three Dice is : " + a;
}