const Challenge03 = async n => {
  const count = 1;
  const milliseconds = 100;

  for (let i = n; i >= count; i--) {
    let line = '';

    for (let j = i; j >= count; j--) {
      line += `${j} `;
    }

    for (let j = 2; j <= i; j++) {
      line += `${j} `;
    }

    await new Promise(resolve => setTimeout(resolve, milliseconds));
    console.log(line);
  }
};

Challenge03(9);
