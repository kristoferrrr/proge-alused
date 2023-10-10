const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Mis on õhutemeratuur?: ', temperatuur =>{
  if(parseFloat(temperatuur) <= 4.0 ){
   console.log('ei ole jäätumise ohtu')
  } else {
    console.log('On jäätumis oht.')
  }
    readline.close()
    
  
})