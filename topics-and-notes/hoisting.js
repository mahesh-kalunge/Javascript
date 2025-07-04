//Variables and function are moved to the top of the scope before code execution
//variable can be declared after they are used
//only declaration are hoisted not a initialization
//scope can be both local and global

//we can access function before declaration

test()
function test(){
    console.log('abc');
    
}

console.log(a);  //undefined 
var a;


//Variable declared with let and const keyword. When we try to access variable before it is initialized called temporal dead zone.
// b=22;
// console.log(b);  //Reference error: Can not access before declaration
// let b;

// Question 1

console.log(a1); //undefined
var a1= 10;


//Example : Function declaration vs function expression

// bar(); // TypeError: bar is not a function
var bar = function() {      //Function expressions are treated as var declarations
  console.log('Hi');
};

//function expression and class expression can not be hoisted.4

// Example : Hoisting inside functions
function test() {
  console.log(x); // undefined
  var x = 5;
}
test();
// var x is hoisted to the top of the function scope.



