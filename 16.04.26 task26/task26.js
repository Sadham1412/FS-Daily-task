// Extract values from an array/object using destructuring.
console.log(" Extract values from an array")
let array=["mobile","tv","tablet"];
let [a,b,c]=array;
console.log(a);
console.log(b);
console.log(c);
// object using destructuring.
console.log("object using destructuring.")
let object={name:"sadham",empid:2,dep:"it"};
let {name,empid,dep}=object;
console.log(name,empid,dep);

// Copy an array using spread operator.
console.log("Copy an array using spread operator")
let array1=[1,2,3,4,5];
console.log(array1);
// copy array using spread operator 
let array2=[...array1];
array2.pop()
console.log(array2);

// Write a function using rest operator.
function sums(...nums){
    let num=0;
for(let i of nums){
num+=i
}
return num;
}
console.log(sums(1,2,3));