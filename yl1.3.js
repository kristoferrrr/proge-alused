const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('sisestage astme alus: ', number1 => {
  readline.question('sisestage astendaja: ', number2 => {
    let result = Math.pow(number1, number2)
    console.log(result);
    readline.close();
  })
});