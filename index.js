/*
Count =  Counter program 
*/

let count = 0;

document.getElementById("increment").onclick = function () {
    count += 1;
    document.getElementById("countLable").innerHTML = count;
}

document.getElementById("reset").onclick = function () {
    count = 0;
    document.getElementById("countLable").innerHTML = count;
}

document.getElementById("decrement").onclick = function () {
    count -= 1;
    document.getElementById("countLable").innerHTML = count;
}