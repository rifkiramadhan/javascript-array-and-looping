const Chalenge01 = async () => {
  const n = 5;
  let count = 1;
  const milliseconds = 100;

  for (let i = 0; i < n; i++) {
    let line = '';

    for (let j = 0; j < n; j++) {
      line += ` ${count} `;
      count++;
    }

    await new Promise(resolve => setTimeout(resolve, milliseconds));
    console.log(line);
  }
};

Chalenge01();
