const sameElement = (arr1, arr2) => {
  const commonElements = [];

  for (const num1 of arr1) {
    for (const num2 of arr2) {
      if (num1 === num2 && !commonElements.includes(num1)) {
        commonElements.push(num1);
      }
    }
  }

  return commonElements.sort((a, b) => a - b);
};

const diffSetAB = (arrA, arrB) => {
  const result = [];

  for (const num of arrA) {
    if (!arrB.includes(num) && !result.includes(num)) {
      result.push(num);
    }
  }

  return result.sort((a, b) => a - b);
};

const diffSetBA = (arrA, arrB) => {
  const result = [];

  for (const num of arrB) {
    if (!arrA.includes(num) && !result.includes(num)) {
      result.push(num);
    }
  }

  return result.sort((a, b) => a - b);
};

const intersectAB = (arrA, arrB) => {
  const result = [];

  for (const a of arrA) {
    if (arrB.includes(a) && !result.includes(a)) {
      result.push(a);
    }
  }

  return result.sort((a, b) => a - b);
};

const union = (arrA, arrB) => {
  const result = [];

  for (const num of arrA) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }

  for (const num of arrB) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }

  return result.sort((a, b) => a - b);
};

const runChallenges = () => {
  console.log('1. Same Element:');
  console.log(sameElement([1, 2, 4, 7, 8], [2, 3, 7, 9]));
  console.log(sameElement([1, 2, 7, 4, 7, 8], [7, 7, 3, 2, 9]));
  console.log(sameElement([2, 4, 6, 8], [1, 3, 5, 7, 9]));

  console.log('\n2. Set Operations: ');
  const A = [1, 2, 3, 4, 5];
  const B = [2, 4, 6, 7];
  console.log('DiffSetAB: ', diffSetAB(A, B));
  console.log('DiffSetBA: ', diffSetBA(A, B));
  console.log('IntersectAB: ', intersectAB(A, B));
  console.log('Union: ', union(A, B));
};

runChallenges();
