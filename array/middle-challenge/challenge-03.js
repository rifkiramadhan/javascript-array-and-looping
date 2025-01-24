const reverseList = arr => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  return arr;
};

const removeDuplicate = arr => {
  const uniqueSet = new Set();
  const result = [];

  for (const num of arr) {
    if (!uniqueSet.has(num)) {
      uniqueSet.add(num);
      result.push(num);
    }
  }

  return result;
};

const runChallenges = () => {
  console.log('1. Reverse List: ');
  console.log(reverseList([1, 2, 3, 4]));

  console.log('\n2. Remove Duplicate');
  console.log(removeDuplicate([1, 1, 2, 3, 4, 1, 2, 3]));
  console.log(removeDuplicate([7, 5, 3, 5, 1]));
  console.log(removeDuplicate([1, 1, 1, 1, 1]));
};

runChallenges();
