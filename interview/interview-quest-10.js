/*
    Buat 2 fungsi untuk menampilkan angka deret :
    1). ShowPatternOne(5), output :
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5

    2). ShowPatternTwo(5) Output :
    1
    2 3
    3 4 5
    4 5 6 7
    5 6 7 8 9
*/

const ShowPatternOne = n => {
  for (let i = 1; i <= n; i++) {
    let line = '';

    for (let j = 1; j <= i; j++) {
      line += ` ${j} `;
    }

    console.log(line);
  }
};

const ShowPatternTwo = n => {
  let count = 1;

  for (let i = 0; i < n; i++) {
    let line = '';

    for (let j = 0; j <= i; j++) {
      line += ` ${count + j} `;
    }
    count++;

    console.log(line);
  }
};

const runChallenge = () => {
  ShowPatternOne(5);
  console.log();
  ShowPatternTwo(5);
};

runChallenge();
