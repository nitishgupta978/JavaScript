/*
ternary operator - it is shortcut of if/else statement
                 take 3 steps
                 1 . conditions
                 2 . expression if true
                 3 . expression if false
               
      condition? ifTrur : ifFalse;           
*/

let adult = getValue(31);
console.log("value is : ", adult);
function getValue(age) {
    return age >= 18 ? true : false;

}

Winners(false);
function Winners(win) {
    win ? console.log("You are WIN!") : console.log("You are LOSE!");
}

