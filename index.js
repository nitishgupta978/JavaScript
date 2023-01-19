/*
function()- Define your code one time and use many time ,
           to perform some code, call the function name.
*/


action();
function action() {

    let birthdayBoy = 12;
    let names = "John";
    BirthDay(birthdayBoy, names);
}

function BirthDay(birthdayBoy, names) {
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear ", names);
    console.log("you are now ", birthdayBoy, "years old!");

}