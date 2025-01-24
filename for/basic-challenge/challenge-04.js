const Challenge04 = async () => {
  const n = 5;
  const milliseconds = 100;

  for (let i = 1; i <= n; i++) {
    let line = '';

    for (let j = 1; j <= 0; j++) {
      line += ` `;
    }

    for (let j = i; j <= n; j++) {
      line += ` ${j} `;
    }

    await new Promise(resolve => setTimeout(resolve, milliseconds));
    console.log(line);
  }
};

Challenge04();
