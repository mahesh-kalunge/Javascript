//Map and weakmap
//Map and weakmap are store key-value pair but with difference

//The key-value in weakmap should always be an object.
//If there is no reference to the object the object will be collected garbage.
//You can't loop through a weakmap, nor check its size but in set you can.


const map = new Map();

map.set('name', 'Mahesh');       // String key
map.set(123, 'Number key');     // Number key
map.set({ x: 1 }, 'Object key'); // Object key

console.log(map.size); // 3
//map = null;   //Can not collected garbage value

for (let [key, value] of map) {
  console.log(key, value); // Iterable
}

//map methods
console.log(map.get('name'));  //return value
console.log(map.set('age', 30));  //set the value of key and return map
console.log(map.delete('age')); //Delete the entry and return true
console.log(map.has('name'));   //Return true if the map has key provider
map.clear();       //Clear all map
console.log(map.size);   //0


//Weakset example
const weakMap = new WeakMap();

let obj = { name: 'Bob' };
weakMap.set(obj, 'some value');

console.log(weakMap.has(obj)); // true

obj = null; // The object can now be garbage collected
console.log(obj);

// Can't check size or iterate
