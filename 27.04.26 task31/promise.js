// A Promise is an object that represents a value that may be available now, later, or never.
// Pending → Waiting
// Resolved → Success
// Rejected → Failed
function taskperformances(){
    return new Promise((resolve)=> {
        let a=1,b=2;
        resolve(a+b); 
    });
}
taskperformances()
.then((result)=>{
    console.log(result*5)
});
// callback hell 

// use if else
    function orderfood(){
        return new Promise((resolve,reject)=>{
             let food=true;
             if(food){
                resolve("food is ready")
             }
             else{
                reject("not yet")
             }
        });
    }
orderfood()
.then(result => {
    console.log(result);   // success
})
.catch(error => {
    console.log(error);    // failure
});

// variable example 
let myPromise = new Promise((resolve, reject) => {
    let success = true;

    if(success){
        resolve("Task completed");
    } else {
        reject("Task failed");
    }
});

myPromise.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});