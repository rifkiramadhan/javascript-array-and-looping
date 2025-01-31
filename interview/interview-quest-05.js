/*
    Buat fungsi untuk menampilkan angka deret :
    ShowPattern(5), output :
    1 5 1 5 1
    2 4 2 4 2
    3 3 3 3 3
    4 2 4 2 4
    5 1 5 1 5

    ShowPattern(9), output :
    1 9 1 9 1 9 1 9 1 
    2 8 2 8 2 8 2 8 2
    3 7 3 7 3 7 3 7 3
    4 6 4 6 4 6 4 6 4 
    5 5 5 5 5 5 5 5 5
    6 4 6 4 6 4 6 4 6
    7 3 7 3 7 3 7 3 7
    8 2 8 2 8 2 8 2 8
    9 1 9 1 9 1 9 1 9
*/

const ShowPattern = n => {
  for (let i = 1; i <= n; i++) {
    let line = '';

    for (let j = 1; j <= n; j++) {
      const kiri = i;
      const kanan = n - i + 1;

      line += j % 2 !== 0 ? `${kiri} ` : `${kanan} `;
    }

    console.log(line.trim());
  }
};

const runChallenge = () => {
  ShowPattern(5);
  console.log();
  ShowPattern(9);
};

runChallenge();
