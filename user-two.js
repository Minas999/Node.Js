emitter=require('./user-one')
const fs =require('fs')

emitter.emit('start', 555)
    if( typeof(d)!==undefined) {
       
            emitter.on('message',(d)=>{
                fs.writeFile('message.txt',d,function (err) {
                    if (err) throw err;
                    console.log("exav");
                    
                })
                
            })
            emitter.emit('message','helyy22ylo')
            
            
        
    }else{
        console.log('ghgh');
        
    }

 