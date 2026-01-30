let newPromise  = new Promise((resolve, reject) => {
    let datarecived = false;
    if(datarecived){
        resolve("Data recived successfully");
    } else {
        reject("Data not recived");
    }
})

// newPromise.then(console.log ).catch(console.log ) // then is reslove and catch is reject

newPromise.then((message)=>{
    console.log("success: " + message);

    return "next success message" + message ;

} )
.then((nextmessage) => {console.log( nextmessage);
})
.catch((error) => {
    console.log("fail: " + error);
})
.finally(() => {
    console.log("Promise is completed");
});

// function fetchDataFromServer( successcallback, errorcallback) {
//     let dataFetched = true;  

//     if(dataFetched) {
//         successcallback("Data fetched successfully from server.");
//     } else {
//         errorcallback("Error fetching data from server.");
//     }
// }

// fetchDataFromServer((message)=>{
//     console.log(message);

//     fetchDataFromServer((nextmessage) =>{
//         console.log("next message: " + nextmessage);
        
//     },
//     ( nexterror)=>{
//         console.log("next error: " + nexterror);
//     })
// }, 
// (error)=>{
//     console.log(error);
// });