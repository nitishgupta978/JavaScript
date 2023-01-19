/*
do while loop -  do Something ,
              then check condition if conditions are true then continew
              
*/

let username = "";
do {
    username = window.prompt("Please enter your Name");
} while (username == "" || username == null)

console.log("Hi! ", username);
