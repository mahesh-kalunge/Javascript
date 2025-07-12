

## Adding/Removing
```javascript
const arr = [1, 2, 3, 4, 5];

const push = arr.push(6);                // Adds to end [1, 2, 3, 4, 5, 6]
const pop = arr.pop();                   // Remove from end [1, 2, 3, 4, 5]
const unshift = arr.unshift(0)           // Adds to start [0, 1, 2, 3, 4, 5]
const shift = arr.shift()                // Remove from start [1, 2, 3, 4, 5]
const splice = arr.splice(2, 1)          // Removes 1 item at index 2 [1, 2, 4, 5]
const slice = arr.slice(1, 3)            // Return [2, 4] (non destructive)
```
## Iteration

```javascript
const arr = [1, 2, 3, 4, 5];

arr.forEach(n => console.log(n);               // Run function for each item
const double = arr.map( n => n * 2);           // Return new array [2, 4, 6, 8, 10]
const even = arr.filter( n => n % 2 === 0);    // Return new array [2, 4]
const found = arr.find( n => n < 3);           // Returns the first element -> 4
const findIndex = arr.findIndex( n => n > 3);  // Returns the index of the first element --> 2
const allEven = arr.every( n => n % 2 === 0);  // Returns true only if all elements pass the test. --> false
const someEven = arr.some( n => n % 2 === 0);  // Returns true if at least one element passes the test
const sum = arr.reduce((a , b) => a + b, 0);   // Applies a function against an accumulator (a) and each element (b) to reduce the array to a single value and here initioal value is 0. --> 12
```

## Transform/Copy

```javascript
const arr = [1, 2, 3, 4, 5];

const reverse = arr.reverse();              // [5, 4, 3, 2, 1]
const sortString = arr.sort();              // Sort as string [1, 2, 3, 4, 5]
const sortNum = arr.sort((a, b) => a -b);   // Numeric sort [1, 2, 3, 4, 5]
const concat = arr.concat(6, 7);            // [1, 2, 3, 4, 5, 6, 7]
const flatten = arr.flat()                  // Flattens 1 level of nested array eg. [1, 2, [3, 4], 5]
const includes = arr.includes(4);           // Return true if element is in array --> true
```

## Modern methods

```javascript

[1,2,3].at(-1);          // 3 – like slice but supports negative index
Array.from("123");       // ['1','2','3']
Array.isArray(arr);      // To check whether a variable is an array --> true
```



