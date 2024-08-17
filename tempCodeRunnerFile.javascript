function dog(callback){
    x = true;
    if(x == true){
    setTimeout(()=>{
        console.log("hello this is a dog");
        setTimeout(()=>{
            console.log("the dog is running");
            
        }, 3000);
        callback();
    },5000)
}
else{
    callback();
}
}

function cat(){
    setTimeout(()=>{
        console.log("this is a cat");
    },2000)
    
}
dog(()=>{
    cat()
});