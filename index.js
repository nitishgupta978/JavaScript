/*
switch case - 
*/

let grade = 55;

switch (true) {
    case grade >= 90:
        console.log("you did greate!");
        break;
    case grade >= 75 && grade <= 89:
        console.log("you did good!");
        break;
    case grade >= 60 && grade <= 74:
        console.log("you did OK!");
        break;
    case grade >= 35 && grade <= 60:
        console.log("you did Fine!");
        break;
    case grade >= 0 && grade <= 30:
        console.log("you are FAIL !");
        break;
    default:
        console.log("This is not a grade!")
}

