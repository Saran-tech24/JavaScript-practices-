// let person1 ={
//     name1 : "saran",
//     age : 40

// }

// function printusername(uName, uAge = 25){
//     // console.log("hello very one", person1.name1, person1.age);
//     // if(uAge<40){
//       console.log (`hi ${uName}, your age is ${uAge}`)

//     // }
// }

// printusername("saran", 39)
// printusername("john", 38)
// printusername("peter", 49)
// printusername("peter",)


// function fullname(){
//     let fname = "javascript";
//     let lname = "react";
//     console.log(fname + " " + lname);
// }

// fullname();

function greet(name = "guest"){
    console.log("hello, " + name + "!");
}
greet("arish");
greet()