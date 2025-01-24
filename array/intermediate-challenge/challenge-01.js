const mergeList = (list1, list2) => {
  const result = new Array(list1.length + list2.length);
  let k = 0;
  let i = 0;
  let j = 0;

  while (i < list1.length || j < list2.length) {
    if (i >= list1.length) {
      result[k] = list2[j];
      j++;
    } else if (j >= list2.length) {
      result[k] = list1[i];
      i++;
    } else if (list1[i] <= list2[j]) {
      result[k] = list1[i];
      i++;
    } else {
      result[k] = list2[j];
      j++;
    }

    k++;
  }

  return result;
};

const runChallenges = () => {
  console.log(mergeList([1, 4, 7, 12, 20], [10, 15, 17, 33]));
  console.log(mergeList([2, 3, 5, 7], [11, 13, 17]));
  console.log(mergeList([2, 3, 5, 7, 11], [7, 11, 13, 17]));
};

runChallenges();
