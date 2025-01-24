const frequentElement = arr => {
  const frequentDict = {};

  for (const num of arr) {
    frequentDict[num] = (frequentDict[num] || 0) + 1;
  }

  return frequentDict;
};

const addition = (arr1, arr2) => {
  const maxLength = Math.max(arr1.length, arr2.length);
  const result = [];
  let carry = 0;

  for (let i = 1; i <= maxLength; i++) {
    const num1 = arr1[arr1.length - i] || 0;
    const num2 = arr2[arr2.length - i] || 0;
    const sum = num1 + num2 + carry;

    result.unshift(sum % 10);
    carry = Math.floor(sum / 10);
  }

  if (carry > 0) {
    result.unshift(carry);
  }

  return result;
};

const runChallenges = () => {
  console.log('1. Frequent Element: ');
  const testArray1 = [1, 2, 3, 4, 4, 4, 3, 3, 2, 4];
  console.log(frequentElement(testArray1));

  console.log('\n2. Frequent Element: ');
  console.log(addition([1, 2, 3], [4, 5, 6]));
  console.log(addition([9, 2, 7], [1, 3, 5]));
};

runChallenges();
