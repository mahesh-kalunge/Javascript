//-------Call, apply and bind example-------
 
 function fullName(greet){
 	return greet + " " + this.firstName + " " + this.lastName
 }
 
 const person1 = {
 	firstName: 'Elon',
 	lastName:'Musk'
 }
 const person2 = {
 	firstName: 'Ratan',
 	lastName:'Tata'
 }
 
 //Call method is used invoke a function with specified this value and argument provided individually.
 console.log(fullName.call(person1 , 'Hello')) //Hello Elon Musk
 console.log(fullName.call(person2, 'Hi')) //Hi Ratan Tata
 
 //Appy method is similar to call, but it accepts arguments as an array.
console.log(fullName.call(person1 , ['Hello'])) //Hello Elon Musk
console.log(fullName.call(person2, ['Hi'])) //Hi Ratan Tata

//Bind method creates a new function with specified this value and optionally, initial arguments
const person1fullName = fullName.bind(person1);
const person2fullName = fullName.bind(person2);
console.log(person1fullName('hello')) //Hello Elon Musk
console.log(person2fullName('hello')) //Hi Ratan Tata



