//Set vs weakset
//Set and weakset are collection of unique and ordered elements with some key difference.

//Weakset contains only objects but set contains any type (primitive or object)
//If the object inside the weakset does not have reference then it will be collected garbage value
//Weakset have only three methods add(), delete() and has()
//You can't loop through a WeakSet, nor check its size but in set you can.

//set example
const set = new Set()
set.add(1);
set.add("hello");
set.add({name:'mahesh'});

console.log(set.size)   //3
for(let item of set){
  console.log(item);   // Can iterate over all values
}


//weakset example
const obj1= {name:'Mahesh'};
const obj2= {age:30};

const weakSet = new WeakSet();
weakSet.add(obj1);
weakSet.add(obj2);

//weakSet.add(1);  //TypeError Can't add primitive type

console.log(weakSet.has(obj1)); // true

// No way to see all items or get size
