const Challenge03 = async () => {
  const n = 5;
  const milliseconds = 100;

  for (let i = 0; i <= n; i++) {
    let line = '';

    for (let j = 0; j <= n; j++) {
      line += ` ${j} `;
    }

    await new Promise(resolve => setTimeout(resolve, milliseconds));
    console.log(line);
  }
};

Challenge03();
