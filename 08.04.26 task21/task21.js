// Use map to double all numbers in an array.
console.log("Use map to double all numbers in an array.")
let array=[1,2,3,4];
let result =array.map((item) => item*2);
console.log(result)
// Use filter to get even numbers from an array.
console.log("Use filter to get even numbers from an array.")
let num=[1,2,3,4,5,6]
let display=num.filter((item)=> item %2===0);
console.log(display);
// Use reduce to find the sum of an array.
console.log("Use reduce to find the sum of an array.");
let sum=[1,2,3];
let final=sum.reduce((total,item)=> total+item,0);
console.log(final)
// Find the first number greater than 10.
console.log("Find the first number greater than 10.");
let greater=[5,8,10,12,20];
let dis=greater.find(item => item > 10 );
console.log(dis);
// Check if array includes a specific value.
console.log("Check if array includes a specific value.")
let list=[1,2,3,4,5]
let a=list.includes(5);
let b=list.includes(6);
console.log(a);
console.log(b);