let newPromise  = new Promise((resolve, reject) => {
    let datarecived = false;
    if(datarecived){
        resolve("Data recived successfully");
    } else {
        // reject("Data not recived");
        throw new Error("Data not recived");
    }
})

async function executepromise(){
 
try{
    let message = await newPromise

    let newmessage = await newPromise  
    console.log( message );
    console.log( `Next message: ${ newmessage}`);
    
}
catch(error){
    console.log( error.message );
}
finally{
    console.log("Execution completed");
}
}

executepromise();
console.log( "last");

 