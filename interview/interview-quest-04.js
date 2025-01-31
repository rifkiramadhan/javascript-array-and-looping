/*
    Buat fungsi FindDivisor(int n) untuk menampilkan bilangan-bilangan pembagi n :
    FindDivisor(6) => output: 1 2 3
    FindDivisor(24) => output: 1 2 3 4 6 8 12
    FindDivisor(7)=> output : 1
*/

const FindDivisor = n => {
  const divisors = [];
  let count = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      divisors[count] = i;
      count++;
    }
  }

  return divisors;
};

const runChallenge = () => {
  console.log(FindDivisor(6).join(', '));
  console.log(FindDivisor(24).join(', '));
  console.log(FindDivisor(7).join(', '));
};

runChallenge();
