const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage ainepunkitde arv: ', ainepunktid => {
  readline.question('Sisestage nädalate arv: ', nädalad => {
    let result = Math.ceil((ainepunktid * 26 ) / nädalad)
    console.log(result);
    readline.close();
  })
});