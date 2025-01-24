const PowNumber = n => {
  const newArray = new Array(n);
  for (let i = 0; i < n; i++) {
    newArray[i] = i;
  }
  return newArray;
};

const PowNumberWithMathPow = n => {
  const newArray = new Array(n);
  for (let i = 0; i < n; i++) {
    newArray[i] = Math.pow(2, i);
  }
  return newArray;
};

const powNumberTwo = n => {
  const newArray = new Array(n);
  for (let i = 0; i < n; i++) {
    newArray[i] = i;
  }
  return newArray;
};

const oddNumber = n => {
  const newArray = new Array(n);
  for (let i = 0; i < n; i++) {
    newArray[i] = 2 * i + 1;
  }
  return newArray;
};

const powNumberThree = n => {
  const newArray = new Array(n);
  for (let i = 0; i < n; i++) {
    newArray[i] = i;
  }
  return newArray;
};

const fibonacci = n => {
  const newArray = new Array(n);
  newArray[0] = 1;
  newArray[1] = 1;

  for (let i = 2; i < n; i++) {
    newArray[i] = newArray[i - 2] + newArray[i - 1];
  }
  return newArray;
};

const powNumberFour = n => {
  const newArray = new Array(n);
  for (let i = 0; i < n; i++) {
    newArray[i] = i === Math.floor(n / 2) ? 2 : 5;
  }
  return newArray;
};

const isPalindrome = array => {
  for (let i = 0; i < array.length / 2; i++) {
    if (array[i] !== array[array.length - i - 1]) {
      return false;
    }
  }

  return true;
};

const rotateArray = arr => {
  const temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
  return arr;
};

const orderSwapArray = arr => {
  if (typeof arr === 'number') {
    const tempArr = new Array(arr);

    for (let i = 0; i < arr; i++) {
      tempArr[i] = i + 1;
    }

    arr = tempArr;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    let minValue = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < minValue) {
        minIndex = j;
        minValue = arr[j];
      }
    }

    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
};

const displayArray = arr => {
  console.log(arr.join(' '));
};

const runChallenges = () => {
  console.log('1. Power of Two Functions: ');
  console.log('PowNumber: ');
  displayArray(PowNumber(5));
  console.log('PowNumberWithMathPow: ');
  displayArray(PowNumberWithMathPow(5));

  console.log('\n2. Odd Number Functions: ');
  console.log('PowNumberTwo: ');
  displayArray(powNumberTwo(5));
  console.log('OddNumber: ');
  displayArray(oddNumber(5));

  console.log('\n3. Fibonacci Functions: ');
  console.log('PowNumberThree: ');
  displayArray(powNumberThree(5));
  console.log('fibonacci: ');
  displayArray(fibonacci(5));

  console.log('\n4. Palindrome Functions: ');
  console.log('PowNumberFour: ');
  displayArray(powNumberFour(5));
  const palindromeArray = [5, 5, 2, 5, 5];
  console.log(palindromeArray);
  console.log(`Is Palindrome? ${isPalindrome(palindromeArray)}`);

  console.log('\n5. Rotate Array: ');
  let arrayToRotate = [1, 5, 3, 4, 9];
  console.log(arrayToRotate);
  arrayToRotate = rotateArray(arrayToRotate);
  console.log('After Rotation: ');
  displayArray(arrayToRotate);

  console.log('\n6. Sorting Array With Swap: ');
  let unsortedArray = [9, 3, 2, 4, 1];
  console.log('Before Sorting: ');
  displayArray(unsortedArray);
  unsortedArray = orderSwapArray(unsortedArray);
  console.log('After Sorting: ');
  displayArray(unsortedArray);
};

runChallenges();
