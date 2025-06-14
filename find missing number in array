function findMissingNumber(arr, n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i; // Sum from 1 to n
  }

  for (let i = 0; i < arr.length; i++) {
    total -= arr[i]; // Subtract array elements
  }

  return total;
}

const arr = [1, 2, 4, 5]; // n = 5
console.log(findMissingNumber(arr, 5)); // Output: 3
