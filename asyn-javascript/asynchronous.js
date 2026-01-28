function f1(){
    console.log( " one");
    
}

function f2(){
    console.log( " two");
    
}

function f3(){
    console.log( " three");
    
}

f1();
setTimeout(f2, 2000);
f3();

//event loop --->
// microtask queue -- first priority
        //promise

 


//macrotask queue -- second priority
        // setTimeout
        // setInterval
