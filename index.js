/*
break - breaks out of a loop entirely
continue - skip an iteration of a loop            
*/


/*
for (let i = 1; i <= 15; i += 1) {
    if (i == 9) {
        break;
    }
    console.log(i);
}
*/
for (let i = 1; i <= 15; i += 1) {
    if (i == 9) {
        continue;
    }
    console.log(i);
}

console.log("Happy new years");
