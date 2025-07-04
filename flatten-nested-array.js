// Using Recursive Function

function flattenArray(arr) {
  return arr.reduce((flat, item) => {
    return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
  }, []);
}

var nestedArray = [1, [2, [3, 4], 5], 6];                       
const flatArray = flattenArray(nestedArray);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]

//Recursion: A function that calls itself to solve smaller parts of the problem.
//reduce: A method that loops through the array and builds up a result.
//Array.isArray(item): Checks if the current item is an array.



// Using Iterative Approach (Using Stack)

function flattenArrayIterative(arr) {
  const stack = [...arr];
  const result = [];

  while (stack.length) {
    const item = stack.pop();
    if (Array.isArray(item)) {
      stack.push(...item); // Push back the contents
    } else {
      result.push(item);
    }
  }
  return result.reverse(); // Because LIFO
}
const nestedArray1 = [1, [2, [3, 4], 5], 6];
console.log(flattenArrayIterative(nestedArray1)); // [1, 2, 3, 4, 5, 6]



//Using Array.prototype.flat()

const nestedArray2 = [1, [2, [3, 4], 5], 6];
const flat = nestedArray2.flat(Infinity);
console.log(flat); // [1, 2, 3, 4, 5, 6]
