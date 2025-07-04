//Coercion is a automatic type conversion of a value from one data  type to another.
// Type conversion can either be implicit (automatically done during code execution) or explicit (done by you the developer).

const sum = 'Hello' + 35;
console.log(sum); // Output: "Hello 35"  --> numeric to string coercion 

let a= 5 - "3";
console.log(a); //output : 2 --> string to numericc coercion

let add = 2 + 3 - "hello"
console.log(add);  //Here NAN printed because minus operator can converted into number so hello is a not a number.

console.log(" " == []);  //false
console.log("1" == 1); //true 
console.log("1" == true) //true  When comparing a string and a boolean, JavaScript first converts the boolean to a number: "1" == 1 true 

console.log("1"+1); //11
console.log("A"-1) //NAN
console.log(2+"-2"+"2") //2-22
console.log("Hello"-"world"+88); //NAN
console.log("Hello"+"78"); //Hello78
