console.log("before declare the varibale")
let name="john";
console.log(name)
name="alice"; 
console.log("after declare the varibale")
console.log(name);
console.log("not change value")
const age=25;
// age=30; 
console.log(age);
let name1 = "John";
let age2 = 25;

console.log("old way");
console.log("My name is " + name1 + " and I am " + age2 + " years old");

console.log("template literal");
console.log(`My name is ${name1} and I am ${age2} years old`);
function greet(name = "alice") {
    console.log(`Hello, ${name}`);
}

greet("sadham");  
greet();       