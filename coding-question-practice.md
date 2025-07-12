## Array and Object Manipulation

### Merging Objects and Mapping Through Arrays

**Combine Arrays Without Duplicates**  
  Write a function that merges two arrays into one, ensuring there are no duplicate values.  
  **Example**: `mergeArrays([1, 2, 3], [2, 3, 4])` should return `[1, 2, 3, 4]`.
  
  ```javascript
function mergeArrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
const result = mergeArrays([1, 2, 3], [2, 3, 4]);
console.log(result); // Output: [1, 2, 3, 4]
```
**Merge Two Objects**  
  Write a function that takes two objects and returns a new object with combined key-value pairs. If the same key exists in both objects, the value from the second object should overwrite the first.

  ```javascript
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const result = mergeObjects(obj1, obj2);
console.log(result); // Output: { a: 1, b: 3, c: 4 }
```

**Transform Array of Objects**  
  Given an array of objects, return an object where keys are derived from one of the object properties, and values are arrays of objects.  
  **Example**: Convert `[{ id: 1, name: 'A' }, { id: 2, name: 'B' }]` into `{ 1: { name: 'A' }, 2: { name: 'B' } }`.

  ```javascript

function keyByProperty(array, id){
  return array.reduce((array,item)=>{
    const { [key]: id,...rest } = item;
    result[id]= rest;
    retur result;
  },{});
}

const input = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' }
];

const output = keyByProperty(input, 'id');
console.log(output);
// Output: { 1: { name: 'A' }, 2: { name: 'B' } })

```

**Convert Array of Strings to Object Format**  
  Given an array of strings like `["apple", "banana", "cherry"]`, convert it into an object where each element is a key with a default value.  
  **Example**: `{ "apple": 0, "banana": 0, "cherry": 0 }`.

  ```javascript

  function arrayToObject(arr, defaultValue = 0) {
      return arr.reduce((obj, key) => {
        obj[key] = defaultValue;
        return obj;
      }, {});
  }
  const fruits = ["apple", "banana", "cherry"];
  const result = arrayToObject(fruits);

  console.log(result);
  // Output: { apple: 0, banana: 0, cherry: 0 }

  ```

  **Array Mapping**  
  Write a function to take an array of numbers and return an array of squared values.

  ```javascript
  function squareArray(arr) {
    return arr.map(num => num * num);
  }
  const numbers = [1, 2, 3, 4];
  const squared = squareArray(numbers);
  console.log(squared); 
  // Output: [1, 4, 9, 16]
  ```



**Group by Property**  
  Given an array of objects, group them by a specified property.  
  **Example**: Group students by age, so `[{name: 'A', age: 20}, {name: 'B', age: 20}, {name: 'C', age: 21}]` becomes `{20: [{name: 'A', age: 20}, {name: 'B', age: 20}], 21: [{name: 'C', age: 21}]}`.

```javascript
function groupBy(array, key) {
  return array.reduce((result, item) => {
    const groupKey = item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
}
const students = [
  { name: 'A', age: 20 },
  { name: 'B', age: 20 },
  { name: 'C', age: 21 }
];

const groupedByAge = groupBy(students, 'age');
console.log(groupedByAge);

```

**Array sort**    
  Find the second largest number in a JavaScript array.

 ```javascript

let arr = [22.5, 55, 88, 45, 89, 45, 90, 11];

const sortUnique = [... new Set(arr)].sort((a, b) => b - a);
const secondLargest = sortUnique[1];
console.log(scondLargest);    //89
```

**Flatten Array**
  Write a JavaScript function to flatten a nested array into a single-dimensional array.
  `Input: [1, [2, [3, 4], 5], 6]`
  `Output: [1, 2, 3, 4, 5, 6]`
```javascript
function flattenArray(array){
  return array.reduce((flat, item) =>{
    return flat.concat(Array.isArray(item)? flattenArray(item): item);
  })
}
flattenArray([1,2,[3,4],5],6])
```




