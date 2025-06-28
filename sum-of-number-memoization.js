function memoize(fn) {
  const cache = {};
  return function (n) {
    if (n in cache) {
      console.log(`Fetching from cache: sum(${n})`);
      return cache[n];
    } else {
      console.log(`Calculating: sum(${n})`);
      const result = fn(n);
      cache[n] = result;
      return result;
    }
  };
}

// Basic recursive sum
function sum(n) {
  if (n <= 1) return n;
  return n + memoizedSum(n - 1);
}

// Memoized version of sum
const memoizedSum = memoize(sum);

// Test
console.log(memoizedSum(5)); // Calculates
console.log(memoizedSum(5)); // Uses cache
console.log(memoizedSum(4)); // Uses cache
