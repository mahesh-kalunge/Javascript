//Find common elements between two array

function findCommonElements(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}
console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5])) // [3, 4]

// using set

function findCommonElements(arr1, arr2) {
  const set2 = new Set(arr2);
  return [...new Set(arr1)].filter(item => set2.has(item));
}
console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5])) // [3, 4]
