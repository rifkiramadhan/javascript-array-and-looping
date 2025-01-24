const addOnePlus = arr => {
  if (arr[arr.length - 1] === 9) {
    let result = [...arr];

    for (let i = result.length - 1; i >= 0; i--) {
      if (result[i] < 9) {
        result[i]++;
        return result;
      }
      result[i] = 0;
    }
    return [1, ...result];
  }
  return arr;
};

const runChallenges = () => {
  console.log(addOnePlus([1, 3, 2, 4]));
  console.log(addOnePlus([1, 4, 8, 9]));
  console.log(addOnePlus([9, 9, 9, 9]));
};

runChallenges();
