/*
    Dari perhitungan berikut ini :
    1 x 1 = 1
    1 x 2 = 2
    2 x 3 = 6
    6 x 4 = 24
    24 x 5 = 120
    120 x 6 = 720
    dst...

    Buatkan fungsi untung menghitung looping array dengan output seperti ini :
    1, 2, 6, 24, 120, 720...
*/

const NumberSequence = count => {
  let nilai = 1;
  let kalian = 2;
  let line = [];

  for (let i = 1; i < count; i++) {
    line[line.length] = nilai;

    nilai = nilai * kalian;
    kalian = kalian + 1;
  }

  return line;
};

const runChallenge = () => {
  console.log(NumberSequence(6).join(', '));
};

runChallenge();
