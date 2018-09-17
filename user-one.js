

const EventEmitter = require("events").EventEmitter;

const emitter = new EventEmitter();

emitter.on('start', (d) => {
    if(typeof(d)!=="undefined"){
        emitter.on('message',(d)=>{
            console.log(d);
            
        })
        emitter.emit('message','hello')
    }else{
        console.log("??");
    }
}) 
//emitter.emit('start', 55);//ktpe hello
emitter.emit('start',undefined) //ktpe ??
module.exports=emitter