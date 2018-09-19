
const readline = require("readline");
var questions = ['1? ', '2? ', '3? '];
var package1 = {
 }
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
for (i=0;i<questions.length;i++){
    if(questions[i]){
       var a=function(i){ rl.question(questions[i], (answer) => {
            // TODO: Log the answer in a database
            console.log(`Thank you for your valuable feedback: ${answer}`);
          
            if(i==questions.length){
                rl.close();
            }else{
                package1[questions[i]]=answer
                console.log(package1);
                
                a(i+1)
                
                
            }
          })

    }
    a(0)
}
    
    
}

  
    

