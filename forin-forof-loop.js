// array for loop
let arr = [10, 20, 30, 40]

// for( let i=0 ; i<arr.length; i++ ){
//     console.log(arr[i]);
    
// } 

// string

let str = "javascript"

// for( let i=0 ; i<str.length; i++ ){
//     console.log(str[i]);
     
// } 


// forof loop

// for (let val of arr){
//     console.log(val);
    
// }

// for (let char of str){
//     console.log(char);
    
// }
 
// function* genfun(){
//     yield 1
//     yield 2
//     yield 3
// }

// let iterator = genfun()

// for(let val of iterator){
//     console.log(val);
    
// }

// forin loop 

let person1 = {
    name : "king",
    hobbies : ["cricket", "video marker", "devloper"],
    family : {
        totalmember : 5,
        sibings : ["a","b", "c"]
    },
    sleep(){
        console.log("i am sleep the bed");
    }
}

for (let key in person1){
    console.log(person1[key]);
    
}