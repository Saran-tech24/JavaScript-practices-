let newPromise  = new Promise((resolve, reject) => {
    let datarecived = true;
    if(datarecived){
        resolve("Data recived successfully");
    } else {
        reject("Data not recived");
    }
})

// newPromise.then(console.log ).catch(console.log ) // then is reslove and catch is reject

newPromise.then((message)=>{
    console.log("success: " + message);

} )
.catch((error) => {
    console.log("fail: " + error);
})
.finally(() => {
    console.log("Promise is completed");
});