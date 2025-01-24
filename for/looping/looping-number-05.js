const LoopingNumberFour = async () => {
  const n = 5;
  const milliseconds = 100;

  for (let i = 0; i < n; i++) {
    let line = '';

    for (let j = 1; j <= n; j++) {
      if (j < n - i) {
        line += '   ';
      } else {
        line += ` ${j} `;
      }
    }

    await new Promise(resolve => setTimeout(resolve, milliseconds));
    console.log(line);
  }
};

LoopingNumberFour();
