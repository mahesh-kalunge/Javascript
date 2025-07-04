// Arrow function
//They provide us with a new and shorter function for declaring function
//It can only used as function expression

//normal function

 function add(a,b){
    return a  + b;
}

console.log(add(2,4));

//Arrow function

let sum = (a,b)=> a + b;
console.log(sum(4,5));

//Arrow function are declared without function keyword
//If there is only one return value then doesn't need to use return keyword as well as arrow function
//It Can not used constructor, this and super keyword. also don't have access to new target keyword

//Destructuring
//Destructuring is extract data from array and object into single variable

let number = [10,20,30,40,50]
let [first,second, ,third]=number
// console.log(first);
// console.log(second);
// console.log(third); 
//10 20 40

const [a, b, c ] = [5, 40];

console.log(a); //5
console.log(b); //40
console.log(c); //undefined

// default value
const [d, e, f= 666 ] = [100, 200];

console.log(d); 
console.log(e); 
console.log(f);


//  Object destructuring

let object = {name:"Mahesh", city: "Pune", age: 20};

let {name, city, age}= object;

console.log(name);
console.log(city);
console.log(age); 

// Rest/Spread operator 
// Both are used with ... 

// Spread operator:
// Spred operator help to expand elements from array or object
//It converts array into list of items (it means it copy the array element)

let array1=[1,2,3];
let array2=[...array1,4,5]
console.log(array2);
console.log(Math.max(...array2))

let obj1= {name: "Mahesh", age: 20};
let obj2= {...obj1, city: "pune"};
console.log("spread operator", obj2)

//Rest Operator
//Rest operator helps to gather all remaining  elements into array or object
//It always written in last argument
const [first1, ...last]= [1,2,3,4]

console.log(first1);
console.log(last);


const {first2, ...last2}= {first2:1, b:2, c:3};
console.log(first2);
console.log(last2)


