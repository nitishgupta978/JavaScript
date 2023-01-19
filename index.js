/*
if statement - if statement show conditions like 
               if it is true than do it other wise don't do this!
*/

let age = 18;

document.getElementById("aButton").onclick = function () {
    const myCheckbox = document.getElementById("myCheckbox");
    const myVisaCard = document.getElementById("myVisaBtn")
    const myDebitCard = document.getElementById("myDebitCard");
    const myCreditCard = document.getElementById("myCreditCard");

    if (myCheckbox.checked) {
        console.log("You Subscrib the channel!")
    } else {
        console.log("You are not Subscrib the channel!")
    }

    if (myVisaCard.checked) {
        console.log("You select my Visa Card!")
    } else if (myDebitCard.checked) {
        console.log("You select my Debit Card!")
    } else if (myCreditCard.checked) {
        console.log("You select my Credit Card!")
    } else {
        console.log("You are not select any Card!")
    }
    const label = document.getElementById("myCheckbox").innerHTML;
    console.log(label);
}