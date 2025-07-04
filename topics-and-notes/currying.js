
//Currying is a function that take one argument at a time and return a new fuction expecting next argument.
//It is a transformation of function that translates a function from callable as f(a,b,c) from callable as f(a)f(b)f(c)


// Currying in javascript is a functional programming technique where a function with multiple arguments is a transformed into sequence of nested function,
// each taking a single argument 

// Closure helps to transform our normal function into currying function. 

function addTwoNumber(a,b){
    return a + b;
}

console.log(addTwoNumber(2,3));



//example of with multiple argument

let add = function(x){
    return function(y){
        return function(z){
            return x+y+z;
        }
    }
}
console.log(add(2)(3)(4));

const getlunch = (ingredient1) =>{
    return (ingredient2) => {
        return (ingredient3) => {
            return `Lunch ${ingredient1}, ${ingredient2}, ${ingredient3}`; 
        } 
    } 
} 
console.log(getlunch('rice')('curd')('dal'));

