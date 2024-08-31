/*
You will be given an integer array and your task is to return 
the sum of elements occupying prime-numbered indices.
The first element of the array is at index 0.
*/


// Solution

function total(arr) {
  let sumPrimeIndices = 0;
  for (let i = 2; i < arr.length; i++) {
    if (isPrime(i)) {
      sumPrimeIndices += arr[i];
    }
  }
  return sumPrimeIndices;
}

function isPrime(num) {
  let root = Math.sqrt(num)
  for (let i = 2; i <= root; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// or

function total(arr) {
  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };
  
  return arr.filter((_el, idx) => isPrime(idx)).reduce((a, b) => a + b, 0);
}