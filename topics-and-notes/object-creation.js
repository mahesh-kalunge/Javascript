// 1. Object Literal Syntax:

const person = { firstName: "Mahesh", lastName: "Kalunge" };
console.log(person);


//2. Constructor function

function Person(fname,lname){
    this.first_name=fname;
    this.last_name=lname
}

const person1=new Person("Mahesh","Kalunge")
console.log(person1);

//3. Class based syntax
class Person1{
    constructor(fname,lname){
        this.first_name=fname;
        this.last_name=lname;
    }
}
const person2=new Person1("Mahesh","Kalunge")
console.log(person2);

//4. object.create()

const personPrototype={
    name:"Mahesh",
    greet(lastName){
        console.log(`My name is ${this.name} ${this.lastName}`);
        
    }
}
const person4 = Object.create(personPrototype);
person4.name="Mahesh";
person4.lastName="kalunge";
console.log(person4);

 // greet will be accessible inside prototype 
