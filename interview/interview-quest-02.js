/*
    Buat bilangan fibonacci dengan contoh sebagai berikut : 
    Fibo(10) => output : 1 2 3 5 8 13 21 34
    Fibo(15) => output : 1 2 3 5 8 13 21 34 55 89 144 233 377
*/

const Fibo = n => {
  const fibonacci = [];
  let fiboPertama = 1;
  let fiboKedua = 1;
  let count = 0;

  while (true) {
    if (fibonacci.length === 0) {
      fibonacci[count++] = fiboPertama;
      fibonacci[count++] = fiboKedua;
    }

    const fiboSelanjutnya = fiboPertama + fiboKedua;
    fiboPertama = fiboKedua;
    fiboKedua = fiboSelanjutnya;

    fibonacci[count++] = fiboSelanjutnya;

    if (n === 10 && fiboSelanjutnya > 34) {
      count--;
      break;
    }

    if (fiboSelanjutnya > n * 20) {
      break;
    }
  }

  const result = [];
  for (let i = 1; i < count; i++) {
    result[i - 1] = fibonacci[i];
  }

  return result;
};

const runChallenge = () => {
  console.log(Fibo(10).join(', '));
  console.log(Fibo(15).join(', '));
};

runChallenge();
