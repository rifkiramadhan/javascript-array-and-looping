/**
    Buat fungsi ShowPrimeNumber(n) untuk menampilkan bilangan prima, 
    seperti contoh dibawah ini : 
    ShowPrimeNumber(15) => output : 2, 3, 5, 7, 11, 13
    ShowPrimeNumber(25) => output : 2, 3, 5, 7, 11, 13, 17, 19, 23
    ShowPrimeNumber(50) => output : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47
**/

const showPrimeNumber = n => {
  let bilanganPrima = [];
  let count = 0;

  for (let i = 2; i <= n; i++) {
    let prima = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        prima = false;
        break;
      }
    }

    if (prima) {
      bilanganPrima[count] = i;
      count++;
    }
  }

  return bilanganPrima;
};

const runChallenge = () => {
  console.log(showPrimeNumber(15).join(', '));
  console.log(showPrimeNumber(25).join(', '));
  console.log(showPrimeNumber(50).join(', '));
};

runChallenge();
