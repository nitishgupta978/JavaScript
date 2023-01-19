/*
switch case - 
*/

let Temp = 12;
let IndiaTemp = 60;
let sunnyTemp = false

if (Temp >= 0 && Temp <= 35 && sunnyTemp) {
    console.log("Temperature is good!")
} else {
    console.log("Temperature is not good!")
}

// Or || operator

if (IndiaTemp >= 0 || Temp <= 35 && sunnyTemp) {
    console.log("Temperature is good!")
} else {
    console.log("Temperature is not good!")
}



