// let hobbies = ["cricket", "video marker", "devloper"]
// let hobbies1 = ["reader","writer"]

// let newarr = [...hobbies, ...hobbies1] // spread operator
// console.log(newarr);

// rest operator

function restopr(a,b,...arr){
    console.log(a,b,arr);
    
}
restopr(1,2,3,4,5)