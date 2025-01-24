const orderEvenBeforeOdd = arr => {
  const result = [...arr];
  const n = result.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (
        result[j] % 2 === 0 &&
        result[j + 1] % 2 === 0 &&
        result[j] > result[j + 1]
      ) {
        [result[j], (result[j + 1] = [result[j + 1]]), result[j]];
      }
    }
  }

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (
        result[j] % 2 === 1 &&
        result[j + 1] % 2 === 1 &&
        result[j] > result[j + 1]
      ) {
        [result[j], (result[j + 1] = [result[j + 1]]), result[j]];
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (result[j] % 2 === 1 && result[j + 1] % 2 === 0) {
        [result[j], (result[j + 1] = [result[j + 1]]), result[j]];
      }
    }
  }

  return result;
};

const displayArray = arr => {
  console.log(arr.join(', '));
};

const runChallenges = () => {
  const inputArrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const orderedArrayOne = orderEvenBeforeOdd(inputArrayOne);
  displayArray(orderedArrayOne);

  const inputArrayTwo = [3, 4, 5, 2, 10];
  const orderedArrayTwo = orderEvenBeforeOdd(inputArrayTwo);
  displayArray(orderedArrayTwo);

  const inputArrayThree = [2, 4, 6, 10, 1];
  const orderedArrayFour = orderEvenBeforeOdd(inputArrayThree);
  displayArray(orderedArrayFour);
};

runChallenges();
