
//Shallow copy
// A shallow copy occures when you copy the reference of object to new variable.
// In this case, only top level properties are copied while nested array or objects still reference the original memory.
// This means that if you change the nested properties in on object, those changes are reflected in original array or object. 
// Because they share the same memory reference.

let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}

console.log("Employee=> ", employee);
let newEmployee = employee   //shallow copy
console.log(newEmployee);

// After modification

newEmployee.ename = "Mahesh";
newEmployee.eaddress="Pune";

console.log("Employee", employee);
console.log("New Employee", newEmployee);

//Deep copy
//Deep copy creates a completely independent copy of object, including all nested object or array.
//This ensures that changes made to one object do not affect other.
//each oject is stored in a separate memory location. 

let employee1 = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}

console.log("Employee=> ", employee1);
let newEmployee1 = JSON.parse(JSON.stringify(employee1))   //deep copy
console.log(newEmployee1);

// After modification

newEmployee1.ename = "Mahesh";
newEmployee1.eaddress="Pune";

console.log("Employee", employee1);
console.log("New Employee", newEmployee1);
