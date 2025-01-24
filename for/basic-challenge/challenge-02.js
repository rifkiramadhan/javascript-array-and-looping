const Challenge02 = async () => {
  const n = 5;
  let count = 1;
  const milliseconds = 100;

  for (let i = 0; i < n; i++) {
    let line = '';

    for (let j = 0; j <= i; j++) {
      line += ` ${count + j} `;
    }

    await new Promise(resolve => setTimeout(resolve, milliseconds));
    count++;
    console.log(line);
  }
};

Challenge02();
