const Challenge03 = async n => {
  console.log('==== Ganjil Genap ====');

  const milliseconds = 100;

  for (let i = 1; i <= n; i++) {
    let line = '';

    for (let j = 1; j <= n; j++) {
      if (i % 2 == 1) {
        if (j % 2 == 1) {
          line += ` - `;
        } else {
          line += ` ${j} `;
        }
      } else {
        if (j % 2 == 0) {
          line += ' - ';
        } else {
          line += ` ${j} `;
        }
      }
    }

    await new Promise(resolve => setTimeout(resolve, milliseconds));
    console.log(line);
  }
};

Challenge03(9);
