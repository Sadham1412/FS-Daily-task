// Create an object with name, age, and method sayHello().
console.log("Create an object with name, age, and method sayHello().")
let obj={id:1,name:"john",age:22, sayhello: function(){
    console.log("this is my name "+ this.name);
}
};
//Access and modify object properties.
console.log("Access and modify object properties.")
console.log(obj.id);
console.log(obj.name)
console.log(obj.age)

// modify 
console.log("modify")
obj.name="alice"
obj.age=30;
console.log(obj.name);
console.log(obj.age);

// call method object 
obj.sayhello();

