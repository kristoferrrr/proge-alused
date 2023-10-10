const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage mitu korda äratada:', aratus => {
   for (let kord = 0; kord < aratus; kord++) {
    console.log("tõuse ja sära")
  }
  readline.close();
});