function orderprocess(callback){
    console.log("order processing ");
    callback(); // A callback function is a function passed as an argument to another function and executed later.
}

function ordercompleted(){
    console.log('order completed');
}
orderprocess(ordercompleted);