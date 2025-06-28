// Fibbonacci series

let number1 = 0;
let number2 = 1;

function helperFibonacci() {
  let current = number1 + number2;
  number1 = number2;
  number2 = current;
  console.log(current);
}

for (let i = 0; i < 10; i++) {
  helperFibonacci();
}
