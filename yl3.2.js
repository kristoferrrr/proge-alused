const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage ringide arv:', ringid => {
  let sumOfCarrots = 0
  for(let i = 1; i <= ringid; i++){
    if(i % 2 == 0){
      SumOfCarrots = sumOfCarrots + i
    }
  }
  console.log("Porgandite koguarv on " + SumOfCarrots)
  readline.close()
})