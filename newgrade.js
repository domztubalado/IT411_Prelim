const util = require('./app.js');

var ngrade = util.askGrade()

if(ngrade<75){
   var mod = ngrade%2;
   
   if(mod==0){
   var minus2 = ngrade-2;
   
   console.log("Your new grade is "+minus2);
   }
   else{
   var minus3 = ngrade-3;
   console.log("Your new grade is "+minus2);
       
   }
}