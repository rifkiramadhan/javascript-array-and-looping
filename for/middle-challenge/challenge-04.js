const Challenge04 = async () => {
  console.log('==== Prime Number ====');

  const n = 5;
  let lineOne = '';

  for (let i = 0; i < 5; i++) {
    lineOne += `${i} `;
  }

  console.log(lineOne);

  const primes = new Array(5);
  let primeCount = 0;
  let number = 2;

  while (primeCount < 5) {
    if (number == 2) {
      primes[primeCount] = number;
      primeCount++;
    } else {
      let isPrime = true;

      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        primes[primeCount] = number;
        primeCount++;
      }
    }

    number++;
  }

  let lineTwo = '';

  for (const prime of primes) {
    lineTwo += `${prime} `;
  }

  console.log(lineTwo);
};

Challenge04();
