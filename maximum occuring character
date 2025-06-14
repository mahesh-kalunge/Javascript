// find the most frequent character in string

function mostFrequentChar(arr) {
  let frequency = {};
  let maxChar = null;
  let maxCount = 0;

  // Count frequencies
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];

    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }

    // Track the max while looping
    if (frequency[char] > maxCount) {
      maxCount = frequency[char];
      maxChar = char;
    }
  }

  return maxChar;
}

const arr = ['a', 'b', 'c', 'a', 'b', 'a'];
console.log(mostFrequentChar(arr)); // Output: 'a'

