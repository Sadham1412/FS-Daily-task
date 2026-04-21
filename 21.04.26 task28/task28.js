console.log("use arrow function")
let welcome=()=>console.log("hello world");
welcome();
let arrow=(a,b)=>{
    return a+b;
}
console.log(arrow(5,10));
let multiple=(a,b)=>a*b;
console.log(multiple(2,2));

// class use constrator 

class student{
    constructor(stdid,name){
        this.stdid=stdid;
        this.name=name;
    }
    // method 
    print(){
console.log(`this is student ID: ${this.stdid}`);
console.log(`student name is : ${this.name}`)
    }
}
// create class object
let obj2= new obj2 (101,'sadhamhussain')
obj2.print();