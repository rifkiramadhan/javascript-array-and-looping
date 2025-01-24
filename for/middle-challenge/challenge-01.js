const Challenge01 = async () => {
  const n = 5;
  const leftValue = 20;
  const rightValue = 10;
  const milliseconds = 100;

  for (let i = 1; i <= n; i++) {
    let line = '';

    for (let j = 0; j <= n; j++) {
      if (j < i) {
        line += ` ${leftValue}`;
      } else if (j == i) {
        line += ` ${i}`;
      } else {
        line += ` ${rightValue}`;
      }
    }

    await new Promise(resolve => setTimeout(resolve, milliseconds));
    console.log(line);
  }
};

Challenge01();
