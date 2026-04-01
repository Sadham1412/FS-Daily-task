//  Check if a number is positive or negative.
console.log("Check if a number is positive or negative.")
console.log("_______________________________________")
let value=10;
if (value>=0){
console.log("postive number");
}
else{
    console.log("negative number");
}
//  Create a switch to print days of the week.

console.log("_______________________________")
let day=1;
switch(day){
    case 1:
        day="monday";
        break;
     case 2:
        day="tuesday";
        break;
    case 3:
        day="wedesday";
        break;
    case 4:
        day="thursday";
        break;
    case 5:
        day="friday";
        break;
    case 6:
        day="saturday";
        break;
    case 7:
        day="sunday";
        break;
    default:
        day="invaild"
}
console.log("The Day is",day);
