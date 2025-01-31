/*
    Buat method untuk menampilkan angka deret :
    ShowPattern(5), output :
    1 2 3 4 5
    2 3 4 5 6
    3 4 5 6 7
    4 5 6 7 8
    5 6 7 8 9
*/

const ShowPattern = n => {
  let count = 1;

  for (let i = 0; i < n; i++) {
    let line = '';

    for (let j = 0; j < n; j++) {
      line += ` ${count + j} `;
    }
    count++;

    console.log(line);
  }
};

const runChallenge = () => {
  ShowPattern(5);
};

runChallenge();
