console.log('Show synchronous vs asynchronous execution.');
// Show synchronous vs asynchronous execution.
// synchronous
console.log("this is example of synchronous")
console.log("match start");
console.log("match break");
console.log("match end");

// asynchronous
console.log("wait a moment it will take 3 second show output")
setTimeout(()=>{
    console.log("hi im sadham ");
},3000);

// Print a message after 2 seconds.
setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);

// Print a counter every 1 second.
 let count=1
setInterval(()=>{
    console.log(count);
     count++;

},1000);


// use clearinterval
 let count=0
let id=setInterval(()=>
    {
count++;
        if(count>10){
            clearInterval(id)
        }
console.log(count)
},1000);