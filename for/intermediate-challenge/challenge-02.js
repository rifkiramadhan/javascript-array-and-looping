const Challenge02 = async (n = 5) => {
  const milliseconds = 100;

  for (let i = 1; i <= n; i++) {
    let line = '';

    for (let j = 1; j <= n; j++) {
      if (i % 2 == 1) {
        line += ` ${n - j + 1}`;
      } else {
        line += ` ${j}`;
      }
    }

    await new Promise(resolve => setTimeout(resolve, milliseconds));
    console.log(line);
  }
};

Challenge02();
