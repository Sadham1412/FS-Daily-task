// function 
function add(a,b){
    return a+b
}
result=add(10,15)
console.log("addition two number");
console.log("addition:",result);

// expression 
let multiple=function(a,b){
    return a*b;
}
console.log("multiplication two number");
console.log("multiplication:",multiple(2,6))

// arrow function 
let subtract=(a,b)=>{
    return a-b;
}
console.log("subtration two number");
console.log("subtration:",subtract(8,3));
// funtion and return 
function squre(num){
return num*num;
}
result=squre(18);
console.log("squre the number");
console.log("squre value:",result);
// global var and local var

let global="global variable";
function scope(){
    let local="local varible"
    console.log(global);
    console.log(local);
}
scope();
console.log(global);// access anywhere within function and without function 
console.log(local);// cannot access outside function 
