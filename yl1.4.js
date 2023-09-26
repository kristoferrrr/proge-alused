const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('sisestage oma nimi: ', nimi => {
  readline.question('sisestage lubatud kiirus (km/h): ', lubatudkiirus => {
    readline.question('sisestage tegelik kiirus (km/h): ', tegelikkiirus => {
      let yletatud = parseInt(tegelikkiirus) - parseInt(lubatudkiirus)
      let arvutatudTrahv = yletatud * 3.0
      let tegelikTrahv = Math.min(190, arvutatudTrahv)
      console.log(nimi + ', kiirus yletamise eest on teil trahv '+ tegelikTrahv + ' eurot.')
      readline.close()
    })
  })
});