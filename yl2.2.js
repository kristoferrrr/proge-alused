const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage Leedu perenimi: ', perenimi => {
 let result
 if(nimi.slice(-2) == 'ne' || nimi.slice(-2) == 'te'){
   if(nimi.slice(-2) == 'ne'){
    result = 'abielus'
   } else if(nimi.slice(-2) == 'te'){
    result = 'vallaline'
   }
 } else {
    if(nimi.slice(-1) == 'e'){
      result = 'maaramata'
    } else {
      result = 'pole leedulanna perekonnanimi'
    }
 }
 console.log(result)
 readline.close();
});