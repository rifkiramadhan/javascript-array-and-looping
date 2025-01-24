const LoopingNumberTwo = async () => {
  const n = 5;
  const milliseconds = 200;

  for (let i = 1; i <= n + 1; i++) {
    let line = '';

    for (let j = 1; j <= n - i + 1; j++) {
      line += ` ${j} `;
    }

    await new Promise(resolve => setTimeout(resolve, milliseconds));
    console.log(line);
  }
};

LoopingNumberTwo();
