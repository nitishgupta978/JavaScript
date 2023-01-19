/*
template literals = delimited with (`)
                   instead of double or single quotes
                   allows embedded variables and expression
*/

let username = "John Wick";
let items = 3;
let price = 54;

// console.log("Hi", username, "!");
// console.log("you have", items, " items yes or not!");
// console.log("total price", price, " of your products");


// console.log(`Hi ${username} !`);
// console.log(`you have ${items} Orange yes or not!`);
// console.log(`total price ${price} of your Orange!`);

let total = `Hi ${username} ! <br>
            you have ${items} items Orange yes or not!<br>
            total price $${price} of your Orange!<br>`;

// console.log(total);

document.getElementById("myLable").innerHTML = total;