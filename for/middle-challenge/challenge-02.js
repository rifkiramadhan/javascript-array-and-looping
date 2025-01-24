const Challenge02 = async () => {
  const n = 5;
  const leftValue = 10;
  const centerValue = 5;
  const rightValue = 20;
  const milliseconds = 100;

  for (let i = 0; i <= n; i++) {
    let line = '';

    for (let j = 0; j <= n; j++) {
      if (j < i) {
        line += ` ${leftValue}`;
      } else if (j == i) {
        line += ` ${centerValue - i}`;
      } else {
        line += ` ${rightValue}`;
      }
    }

    await new Promise(resolve => setTimeout(resolve, milliseconds));
    console.log(line);
  }
};

Challenge02();
