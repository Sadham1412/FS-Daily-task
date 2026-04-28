// promise -resolve,reject 

function A(callback){
    console.log("this is inside function A")
    callback();
}
// a function which is called from within another function 
// immediatlt after a particular task is completed
function B(){
    console.log("im b inside funtion A")
}
A(B);

// 2 number should be added and the result must be multiplied with 5
function Add(a,b,callback){
let result= a+b ;
callback(result);
}
function mul(result){
    console.log(result*5)
}
Add(1,2,mul);
// callback chain task 
// add 2 number
// that subtract by 3
// result 1= a+B;
// result2=3*5;
// final result=15
function Add(a,b,callback){
    let result1=a+b;
    console.log(result1)
    callback(result1,subtract);
}
function multiply(result1,callback){
let result2=result1*5;
console.log(result2)
callback(result2);
}
function subtract(result2){
    console.log(result2-5);
}
Add(1,3,multiply);
// Callback hell happens when you use too many nested callbacks,
//  making code messy and hard to read.

let add=(result)=>{
    let a=1,b=2;
    let result=a+b;
    return result
multiply((result)=>{
    let result2=result*5;
    return result2;
    subtract((result2)=> {
        console.log(result2-3);
    })
})
}
add();
// another example callback hell
setTimeout(() => {
    console.log("Step 1");

    setTimeout(() => {
        console.log("Step 2");

        setTimeout(() => {
            console.log("Step 3");
        }, 1000);

    }, 1000);

}, 1000);