//Duplicate number using set

let array = ['a', 'b', 'c', 'd', 'd', 'e', 'a', 'b', 'c', 'f', 'g', 'h', 'h', 'h', 'e', 'a'];
let unique = [...new Set(array)];
let duplicates = unique.map(value => [value, array.filter(str => str === value).length]);
console.log(duplicates,"duplicate numbers")
  
//Duplicate number using without set

uniqueCounts = [1, 2, 3, 1, 2, 3, 4, 4, 5, 6, 7, 6, 8, 9, 8, 9]
var count = {};
uniqueCounts.forEach(function(i) {
  count[i] = (count[i] || 0) + 1;
})
console.log(count)
