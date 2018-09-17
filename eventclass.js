let functions={}
class emitter{
    static addListener(event,arg){
        functions[event]=arg
    }
    static emit(event, data){
        if(functions[event]){
            functions[event](data)
        }
    }
    
    
}    

emitter.addListener("aaa",(d)=>{
    console.log(d)
})
emitter.emit("aaa",'helhhlo')
