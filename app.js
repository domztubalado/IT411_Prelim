
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a grade :  ', (agrade) => {
    
  var grade = parseInt(agrade);
      
  rl.close();
  return (grade);
});

module.exports = {
    askGrade :agrade
    };