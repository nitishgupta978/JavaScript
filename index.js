/*
while loop -  repeat some code while some condition is true
              potentially infinite
*/

let username = "";
while (username == "" || username == null) {
    username = window.prompt("Please enter your Name");
}

console.log("Hi! ", username);


